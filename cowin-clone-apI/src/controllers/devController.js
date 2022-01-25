const mongoose = require("mongoose");

const User = require("../models/user");
const Center = require("../models/center");
const OTP = require("../models/otp");
const Appointment = require("../models/appointment");
const Cities = require("../../cities");

/*  Developer Endpoints */
//  The following functions can be used while developing, testing, or demonstrating the API.

// Wipes all data from the Database
exports.wipe = function (req, res) {
  User.deleteMany({}, function (err, docs) {
    if (err) {
      res.status(500).send({ error: err });
    }
  });

  Center.deleteMany({}, function (err, docs) {
    if (err) {
      res.status(500).send({ error: err });
    }
  });

  OTP.deleteMany({}, function (err, docs) {
    if (err) {
      res.status(500).send({ error: err });
    }
  });

  Appointment.deleteMany({}, function (err, docs) {
    if (err) {
      res.status(500).send({ error: err });
    }
  });

  OTP.collection.dropIndexes();
  Appointment.collection.dropIndexes();

  res.status(200).send({ msg: "Database wiped" });
};

// Creates dummy centers for all cities
exports.fill = function (req, res) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const type = ["Hospital", "Hospital", "Center", "Clinic", "Healthcenter", "School"];

  for (let i = 0; i < Cities.DB.length; i++) {
    var state = Cities.DB[i].state;

    for (let j = 0; j < Cities.DB[i].cities.length; j++) {
      // Two centers for each city (T/V/C)
      for (let k = 0; k < 2; k++) {
        var city = Cities.DB[i].cities[j];
        var pin = Math.floor(Math.random() * 899999) + 100000;
        var name =
          alphabet[Math.floor(Math.random() * 26)] +
          alphabet[Math.floor(Math.random() * 26)] +
          alphabet[Math.floor(Math.random() * 26)] +
          " " +
          type[Math.floor(Math.random() * 6)];

        var center = new Center();
        center.centerName = name;
        center.state = state;
        center.city = city;
        center.pinCode = pin;
        center.slotsAvailable = 100;

        console.log(center);

        // center.save(function(err, savedCenter) {
        //     if (err) {
        //         res.status(500).send({error: err})
        //     }
        // })
      }
    }
  }

  res.status(200).send({ msg: "Done" });
};
