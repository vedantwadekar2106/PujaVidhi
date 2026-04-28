const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const validate = require("../middleware/validate");

const { validateFeedback } = require("../validators/feedbackValidator");
const { addFeedback } = require("../controllers/feedbackController");

router.post("/", auth, validateFeedback, validate, addFeedback);

module.exports = router;