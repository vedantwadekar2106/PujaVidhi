const express = require("express");
const router = express.Router();

const {
  registerUser,
  getUser,
} = require("../controllers/userController");

// Create user
router.post("/register", registerUser);

// Get user
router.get("/:userId", getUser);

module.exports = router;