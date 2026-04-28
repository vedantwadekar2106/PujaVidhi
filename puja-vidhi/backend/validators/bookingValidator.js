const { body } = require("express-validator");

exports.validateBooking = [
  body("name").notEmpty().withMessage("Name is required"),

  body("phone")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone must be 10 digits"),

  body("address").notEmpty().withMessage("Address is required"),

  body("date").notEmpty().withMessage("Date is required"),

  body("time").notEmpty().withMessage("Time is required"),

  body("service")
    .isIn(["Udak Shanti", "Vastu Shanti", "Satyanarayan"])
    .withMessage("Invalid service"),
];