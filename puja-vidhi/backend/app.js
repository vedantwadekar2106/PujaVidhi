require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Puja Vidhi API Running");
});

module.exports = app;

const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

const patrikaRoutes = require("./routes/patrikaRoutes");

app.use("/api/patrika", patrikaRoutes);