require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const connectDB = require("../config/db");

const User = require("../models/User");

connectDB();

const seedAdmin = async () => {
  try {
    const existing = await User.findOne({ email: "admin@puja.com" });

    if (existing) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashed = await bcrypt.hash("admin123", 10);

    const admin = new User({
      userId: "ADMIN001",
      name: "Admin",
      email: "admin@puja.com",
      password: hashed,
    });

    await admin.save();

    console.log("Admin created successfully");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedAdmin();