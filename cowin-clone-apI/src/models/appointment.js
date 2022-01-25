const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  appointmentDate: { type: Date },
  appointmentNo: Number,
  /* We are storing user info so that we dont have to query through millions of users */
  fullName: String,
  identityNo: String,
  mobile: String,
  centerId: String,
});

// Appointments automatically expire (delete) after 30 days
// User has to wait 30 days before booking next appointment
appointmentSchema.index({ appointmentDate: 1 }, { expireAfterSeconds: 2592000 });

module.exports = mongoose.model("Appointment", appointmentSchema);
