const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const {
  getAllBookings,
  getAllPatrika,
  getAllFeedback,
} = require("../controllers/adminController");

// 🔒 Protected Admin Routes
router.get("/bookings", auth, getAllBookings);
router.get("/patrika", auth, getAllPatrika);
router.get("/feedback", auth, getAllFeedback);

module.exports = router;