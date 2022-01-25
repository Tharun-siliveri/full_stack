const mongoose = require("mongoose");

const User = require("../models/user");
const Appointment = require("../models/appointment");
const Center = require("../models/center");

// Book an appointment slot
exports.create = function (req, res) {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ msg: "Please provide a body for the request" });
  }

  const mobile = req.body.mobile;
  const centerId = req.body.centerId;
  const date = req.body.date;
  // Only 2 formats allowed: '07/30/2019' OR "1960-01-01"
  // This is done to ensure all dates have the same time value (00:00)
  // This allows us to exactly equate 2 Date objects

  if (date.length > 10) {
    return res.status(400).send({ msg: "Invalid Date" });
  }

  var recentlyBooked = function (aId) {
    var booked = true;

    if (aId.length > 0) {
      // The user has booked an appointment
      // Now we check if it was recent (still in DB)
      Appointment.findById(aId, function (err, appointment) {
        if (err) {
          res.status(500).send({ error: "Unable to fetch appointments" });
        } else {
          if (appointment != null) {
            booked = true;
          } else {
            booked = false;
          }
        }
      });
    } else {
      booked = false;
    }

    return booked;
  };

  // Find the user
  User.findOne({ mobile: mobile }, function (err, user) {
    if (err) {
      res.status(500).send({ error: "Unable to fetch users" });
    } else {
      if (user != null) {
        if (user.identityNo.length > 0) {
          // Check if the user has already booked an appointment recently
          if (!recentlyBooked(user.appointmentId)) {
            Center.findById(centerId, function (err, center) {
              if (err) {
                res.status(500).send({ error: "Uanble to fetch centers" });
              } else {
                if (center != null) {
                  // Validate Date
                  const appointmentDate = new Date(date);
                  const now = new Date();

                  if (appointmentDate <= now) {
                    // Cannot book appointment on the same day
                    res.status(400).send({ msg: "Invalid Date" });
                  } else if ((appointmentDate - now) / (1000 * 3600 * 24) > 14) {
                    res.status(400).send({ msg: "Invalid Date" });
                  } else {
                    // Count the number of appointments of that center on the given date
                    Appointment.find(
                      { appointmentDate: appointmentDate, centerId: center._id },
                      function (err, appointments) {
                        if (err) {
                          res.status(500).send({ error: "Unable to fetch appointments" });
                        } else {
                          // Check if appointments are available on the given date
                          if (appointments.length >= center.slotsAvailable) {
                            res.status(205).send({
                              msg: "No appointment slots available on the selected date",
                            });
                          } else {
                            // Book an appointment
                            var appointment = new Appointment();
                            appointment.appointmentDate = appointmentDate;
                            appointment.appointmentNo = appointments.length + 1;
                            appointment.fullName = user.fullName;
                            appointment.identityNo = user.identityNo;
                            appointment.mobile = user.mobile;
                            appointment.centerId = center._id;

                            appointment.save(function (err, savedAppointment) {
                              if (err) {
                                res.status(500).send({
                                  error: "Unable to create Appointment",
                                });
                              } else {
                                user.appointmentId = savedAppointment._id;
                                user.save();
                                res.status(200).send(savedAppointment);
                              }
                            });
                          }
                        }
                      }
                    );
                  }
                } else {
                  res.status(400).send({ msg: "Unable to find Center" });
                }
              }
            });
          } else {
            res.status(205).send({
              msg: "User has already booked an appointment recently. Try again after 30 days.",
            });
          }
        } else {
          res.status(400).send({ msg: "User not registered" });
        }
      } else {
        res.status(400).send({ msg: "Unregistered mobile number" });
      }
    }
  });
};

// Get appointment by its ID
exports.show = function (req, res) {
  var id = req.params.id;
  Appointment.findById(id, function (error, appointment) {
    if (error) {
      res.status(500).send({ error: "Unable to fetch appointments" });
    } else {
      if (appointment != null) {
        res.status(200).send(appointment);
      } else {
        res.status(400).send({ msg: "Appointment not found / Appointment expired" });
      }
    }
  });
};

// Get a Appointments by Center ID
exports.query = function (req, res) {
  centerPassed = req.query.centerId != null;

  if (centerPassed) {
    var centerId = req.query.centerId;
    Appointment.find({ centerId: centerId }, function (error, appointments) {
      if (error) {
        res.status(500).send({ error: "Unable to fetch appointments" });
      } else {
        res.status(200).send({ results: appointments });
      }
    });
  } else {
    res.status(400).send({ msg: "Must provide query parameters" });
  }
};

// Handles deletion of appointment
var deleteAppointment = function (isCompleted) {
  return function (req, res) {
    const id = req.params.id;

    Appointment.deleteOne({ _id: id }, function (err, aptDocs) {
      if (err) {
        res.status(500).send({ error: "Unable to fetch appointments" });
      } else {
        if (aptDocs.deletedCount > 0) {
          User.findOne({ appointmentId: id }, function (err, user) {
            if (err) {
              res.status(500).send({ error: "Appointment deleted. Unable to fetch users" });
            } else {
              if (user != null) {
                // Not necessary, appointmentId is updated during booking and appointments expire automatically.
                // Redundant measure (if MongoDB Indexes do not work as expected)
                user.appointmentId = "";

                if (isCompleted) {
                  user.dosesTaken += 1;
                }

                user.save(function (err, savedUser) {
                  if (err) {
                    res.status(500).send({ error: "Unable to update user" });
                  } else {
                    res.status(200).send({ msg: "Appoinment " + (isCompleted ? "completed" : "deleted") });
                  }
                });
              } else {
                // When we delete a user, all corresponding appointments also get deleted
                res.status(500).send({ error: "User already deleted" });
              }
            }
          });
        } else {
          res.status(400).send({ msg: "No Appointment found / Invalid ID" });
        }
      }
    });
  };
};

// Cancel Appointment by ID
exports.destroy = deleteAppointment(false);

// Complete Appointment by ID
exports.complete = deleteAppointment(true);
