const mongoose = require("mongoose");
const { Schema } = mongoose;

const centerSchema = new Schema({
  centerName: String,
  state: String,
  city: String,
  pinCode: Number,
  slotsAvailable: Number, //per day
});

module.exports = mongoose.model("Center", centerSchema);
