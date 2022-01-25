const mongoose = require("mongoose");

const Cities = require("../../cities");

// Get all states of India
exports.show = function (erq, res) {
  var states = [];
  for (let i = 0; i < Cities.DB.length; i++) {
    states.push(Cities.DB[i].state);
  }

  res.status(200).send({ states: states });
};

// Get Cities of a state
exports.query = function (req, res) {
  //Regex expression to replace '+' with ' '
  const state = req.params.state.replace(/\+/g, " ");
  var i = 0;
  var found = false;

  for (i; i < Cities.DB.length; i++) {
    if (Cities.DB[i].state.toUpperCase() === state.toUpperCase()) {
      found = true;
      break;
    }
  }

  if (found) {
    res.status(200).send({ cities: Cities.DB[i].cities });
  } else {
    res.status(404).send({ msg: "Invalid state name" });
  }
};
