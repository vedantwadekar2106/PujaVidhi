const Booking = require("../models/Booking");
const Patrika = require("../models/Patrika");
const Feedback = require("../models/Feedback");

exports.getAllBookings = async (req, res) => {
  const data = await Booking.find();
  res.json(data);
};

exports.getAllPatrika = async (req, res) => {
  const data = await Patrika.find();
  res.json(data);
};

exports.getAllFeedback = async (req, res) => {
  const data = await Feedback.find();
  res.json(data);
};