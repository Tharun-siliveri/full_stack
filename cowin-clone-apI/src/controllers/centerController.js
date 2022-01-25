const mongoose = require("mongoose");

const Center = require("../models/center");
const Appointment = require("../models/appointment");

// Create a Center
exports.create = function (req, res) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ msg: "Please provide a body for the request" });
  } else {
    var center = new Center();

    // Get values from request payload
    // Assign values to center model
    center.centerName = req.body.centerName;
    center.state = req.body.state;
    center.city = req.body.city;
    center.pinCode = req.body.pinCode;
    center.slotsAvailable = req.body.slotsAvailable;

    center.save(function (error, savedCenter) {
      if (error) {
        // send error response
        res.status(500).send({ error: "Unable to create Center" });
      } else {
        // res doesn't end execution (unlike return) so we have to use else block
        // it only responds and closes connection
        // send success response
        res.status(200).send(savedCenter);
      }
    });
  }
};

// Deleting a Center
exports.destroy = function (req, res) {
  var id = req.params.id;

  Center.deleteOne({ _id: id }, function (err, centerDocs) {
    if (err) {
      res.status(500).send({ error: "Unable to delete center" });
    } else {
      if (centerDocs.deletedCount > 0) {
        Appointment.deleteMany({ centerId: id }, function (err, aptDocs) {
          if (err) {
            res.status(500).send({ error: "Center deleted, unable to delete appointments" });
          } else {
            res.status(200).send({ msg: "Center deleted, appointments cancelled: " + aptDocs.deletedCount });
            // Inform users thier appointments have been cancelled (through SMS)
            // Can find all appointments, inform, delete appoitments one by one (find and delete)
          }
        });
      } else {
        res.status(400).send({ msg: "Center not found / Invalid Center ID" });
      }
    }
  });
};

// Updating a Center
exports.update = function (req, res) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ msg: "Please provide a body for the request" });
  } else {
    var newCenter = {
      centerName: req.body.centerName,
      state: req.body.state,
      city: req.body.city,
      pinCode: req.body.pinCode,
      slotsAvailable: req.body.slotsAvailable,
    };

    Center.updateOne({ _id: req.params.id }, newCenter, function (err, docs) {
      if (err) {
        res.status(500).send({ error: "Unable to modify center" });
      } else {
        res.status(200).send(docs);
      }
    });
  }
};

// Get a Center by its ID
exports.show = function (req, res) {
  Center.findById(req.params.id, function (error, center) {
    if (error) {
      res.status(500).send({ error: "Unable to fetch centers" });
    } else {
      if (center != null) {
        res.status(200).send(center);
      } else {
        res.status(400).send({ msg: "No Centers found / Invalid ID" });
      }
    }
  });
};

// Get a Centers by City
exports.query = function (req, res) {
  cityPassed = req.query.city != null;

  if (cityPassed) {
    //Regex expression to replace '+' with ' '
    var city = req.query.city.replace(/\+/g, " ");
    Center.find({ city: city }, function (error, centers) {
      if (error) {
        res.status(500).send({ error: "Unable to fetch centers" });
      } else {
        // returns empty list if no centers found
        res.status(200).send({ results: centers });
      }
    });
  } else {
    res.status(400).send({ msg: "Must provide query parameters" });
  }
};
