const express = require("express");
const router = express.Router();
const Bhakti = require("../models/Bhakti");

// GET ALL DATA
router.get("/", async (req, res) => {
  const data = await Bhakti.find();
  res.json(data);
});

// ADD DATA
router.post("/", async (req, res) => {
  const item = new Bhakti(req.body);
  await item.save();
  res.json({ message: "Added successfully" });
});

module.exports = router;