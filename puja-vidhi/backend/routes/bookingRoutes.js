const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const validate = require("../middleware/validate");

const { validateBooking } = require("../validators/bookingValidator");
const { createBooking } = require("../controllers/bookingController");

router.post("/", auth, validateBooking, validate, createBooking);

module.exports = router;