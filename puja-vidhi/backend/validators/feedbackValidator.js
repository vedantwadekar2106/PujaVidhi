const { body } = require("express-validator");

exports.validateFeedback = [
  body("rating")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),

  body("comment")
    .optional()
    .isLength({ max: 200 })
    .withMessage("Comment too long"),
];