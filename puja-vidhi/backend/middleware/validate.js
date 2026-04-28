const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};