const mongoose = require("mongoose");
const { Schema } = mongoose;

const otpSchema = new Schema({
  mobile: String,
  code: Number,
  createdAt: { type: Date, default: Date.now },
});

otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

module.exports = mongoose.model("OTP", otpSchema);
