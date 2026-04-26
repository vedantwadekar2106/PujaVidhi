const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

// Register new user
exports.registerUser = async (req, res) => {
  try {
    const userId = uuidv4();

    const user = new User({ userId });
    await user.save();

    res.status(201).json({
      success: true,
      userId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user bookings (later)
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.params.userId });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};