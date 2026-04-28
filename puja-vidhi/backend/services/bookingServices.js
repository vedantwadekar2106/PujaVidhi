const Booking = require("../models/Booking");

// Create booking
exports.createBookingService = async (userId, data) => {
  const booking = new Booking({
    userId,
    ...data,
  });

  return await booking.save();
};

// Get user bookings
exports.getUserBookingsService = async (userId) => {
  return await Booking.find({ userId });
};

// Get all bookings
exports.getAllBookingsService = async () => {
  return await Booking.find();
};