require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");

connectDB();

const Bhakti = require("../models/Bhakti"); // create model if not exist

const seedBhakti = async () => {
  try {
    await Bhakti.deleteMany();

    await Bhakti.insertMany([
      { name: "Ganesh Pujan", price: 500 },
      { name: "Satyanarayan Katha", price: 1500 },
      { name: "Vastu Shanti", price: 2500 },
      { name: "Udak Shanti", price: 1200 },
    ]);

    console.log("Bhakti services added");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedBhakti();