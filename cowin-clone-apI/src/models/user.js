const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String, // empty for new user
  identityNo: String,
  mobile: String, // mobile is used as ID
  appointmentId: String,
  dosesTaken: Number,
});

module.exports = mongoose.model("User", userSchema);
