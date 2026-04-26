const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// IMPORTANT: call DB connection
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// routes
const bhaktiRoutes = require("./routes/bhaktiRoutes");
app.use("/api/bhakti", bhaktiRoutes);

app.get("/", (req, res) => {
  res.send("Puja Vidhi API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});