const mongoose = require("mongoose");

const OTP = require("../models/otp");
const User = require("../models/user");
const Appointment = require("../models/appointment");

// Generate OTP for validation
exports.generate = function (req, res) {
  if (Object.keys(req.body).length === 0 || req.body.mobile === null) {
    res.status(400).send({ msg: "Please provide a body for the request" });
  } else {
    var otp = new OTP();
    otp.mobile = req.body.mobile;

    // OTP generation
    otp.code = Math.floor(Math.random() * 8999) + 1000;

    otp.save(function (error, savedOTP) {
      if (error) {
        // send error response
        res.status(500).send({ error: "Unable to create OTP" });
      } else {
        // send OTP through SMS.
        res.status(200).send(savedOTP);
      }
    });
  }
};

// Validate OTP
exports.validate = function (req, res) {
  if (Object.keys(req.body).length === 0 || req.body.mobile === null) {
    return res.status(400).send({ msg: "Please provide a body for the request" });
  }

  const mobile = req.body.mobile;
  const code = req.body.code;

  OTP.findOne({ mobile: mobile, code: code }, function (error, otp) {
    if (error) {
      // send error response
      res.status(500).send({ error: "Unable to fetch OTP" });
    } else {
      // If OTP matched
      if (otp != null) {
        // Can use deleteOne {_id: otp._id} but this also works
        otp.delete(function (err, deletedOtp) {
          if (err) {
            res.status(500).send({ error: "Unable to remove OTP" });
          } else {
            // Checks if user already exists
            User.findOne({ mobile: mobile }, function (error, existingUser) {
              if (error) {
                res.status(500).send({ error: "Unable to fetch Users" });
              } else {
                if (existingUser != null) {
                  // If a user is found
                  res.status(200).send(existingUser);
                } else {
                  // If not creates a new blank user
                  var user = new User();

                  user.fullName = "User";
                  user.identityNo = "";
                  user.mobile = mobile;
                  user.appointmentId = "";
                  user.dosesTaken = 0;

                  user.save(function (error, savedUser) {
                    if (error) {
                      res.status(500).send({ error: "Unable to create User" });
                    } else {
                      res.status(200).send(savedUser);
                    }
                  });
                }
              }
            });
          }
        });
      } else {
        res.status(205).send({ msg: "Invalid OTP" });
      }
    }
  });
};

// For registering new (blank) users
// Do not use for modifying user info as appointments will not be updated
exports.set = function (req, res) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ msg: "Please provide a body for the request" });
  } else {
    const mobile = req.body.mobile;
    const fullName = req.body.fullName;
    const identityNo = req.body.identityNo;

    var newUser = {
      fullName: fullName,
      identityNo: identityNo,
      mobile: mobile,
    };

    User.findOneAndUpdate({ mobile: mobile }, newUser, { new: true }, function (err, user) {
      if (err) {
        res.status(500).send({ error: "Unable to modify user" });
      } else {
        if (!user) {
          res.status(400).send({ msg: "Mobile number not registered" });
        } else {
          res.status(200).send(user);
        }
      }
    });
  }
};

// Deleting a User
exports.destroy = function (req, res) {
  var mobile = req.params.mobile;

  User.deleteOne({ mobile: mobile }, function (err, userDocs) {
    if (err) {
      res.status(500).send({ error: "Unable to delete user" });
    } else {
      if (userDocs.deletedCount > 0) {
        // deleteOne will also work (this is just in case appointments are not expiring)
        Appointment.deleteMany({ mobile: mobile }, function (err, aptDocs) {
          if (err) {
            res.status(500).send({ error: "User deleted, unable to delete appointments" });
          } else {
            res.status(200).send({ msg: "User deleted, appointments cancelled: " + aptDocs.deletedCount });
          }
        });
      } else {
        res.status(400).send({ msg: "User not found / Invalid mobile number" });
      }
    }
  });
};
