const { body } = require("express-validator");

exports.validatePatrika = [
  body("name").notEmpty().withMessage("Name required"),

  body("gender")
    .isIn(["Male", "Female", "Other"])
    .withMessage("Invalid gender"),

  body("dob").notEmpty().withMessage("DOB required"),

  body("tob").notEmpty().withMessage("Time of birth required"),

  body("place").notEmpty().withMessage("Place required"),
];