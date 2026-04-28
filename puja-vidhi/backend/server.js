require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// middleware imports
const errorHandler = require("./middleware/errorHandler");
const rateLimiter = require("./middleware/rateLimiter");

connectDB();

const app = express();

// global middlewares
app.use(cors());
app.use(express.json());

// rate limiter (before routes)
app.use(rateLimiter);

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/booking", require("./routes/bookingRoutes"));
app.use("/api/patrika", require("./routes/patrikaRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.get("/", (req, res) => {
  res.send("Puja Vidhi API Running 🚀");
});

// error handler (ALWAYS LAST)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});