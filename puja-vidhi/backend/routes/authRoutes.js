const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const SECRET = "PUJA_SECRET";

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = new User({
    userId: "PUJA" + Date.now(),
    name,
    email,
    password: hash
  });

  await user.save();
  res.json({ message: "Signup success" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ message: "Wrong password" });

  const token = jwt.sign({ userId: user.userId }, SECRET);

  res.json({ token, userId: user.userId });
});

module.exports = router;