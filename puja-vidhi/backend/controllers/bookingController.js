const {
  createBookingService,
  getUserBookingsService,
} = require("../services/bookingServices");

exports.createBooking = async (req, res) => {
  try {
    const data = await createBookingService(req.userId, req.body);
    res.json({ message: "Booking successful", data });
  } catch (err) {
    res.json({ message: "Error booking", error: err.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const data = await getUserBookingsService(req.userId);
    res.json(data);
  } catch (err) {
    res.json({ message: "Error fetching bookings" });
  }
};