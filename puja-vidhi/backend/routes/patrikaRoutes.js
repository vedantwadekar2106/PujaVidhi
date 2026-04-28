const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const validate = require("../middleware/validate");

const { validatePatrika } = require("../validators/patrikaValidator");

const Patrika = require("../models/Patrika");
const generatePatrikaId = require("../utils/generatePatrikaId");
const sendEmail = require("../services/emailService");

// ==============================
// ✅ CREATE PATRIKA
// ==============================
router.post("/", auth, validatePatrika, validate, async (req, res) => {
  try {
    const {
      email,
      name,
      gender,
      fatherName,
      motherName,
      dob,
      tob,
      place,
      type,
    } = req.body;

    // ✅ VALIDATE TYPE
    if (!["Black & White", "Color"].includes(type)) {
      return res.json({
        success: false,
        message: "Invalid patrika type",
      });
    }

    // ✅ GENERATE ID
    const patrikaId = generatePatrikaId();

    // ✅ SAVE
    const newPatrika = new Patrika({
      patrikaId,
      userId: req.userId, // 🔒 from token (safe)
      name,
      gender,
      fatherName,
      motherName,
      dob,
      tob,
      place,
      type,
    });

    await newPatrika.save();

    // ✅ EMAIL SEND (fixed)
    if (email) {
      await sendEmail(
        email,
        "Patrika Request Received",
        `<h3>Namaste ${name}</h3>
         <p>Your patrika request has been received.</p>
         <p><b>Patrika ID:</b> ${patrikaId}</p>`
      );
    }

    res.json({
      success: true,
      message: "Patrika request saved successfully",
      patrikaId,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// ==============================
// ✅ GET ALL (ADMIN)
// ==============================
router.get("/", auth, async (req, res) => {
  try {
    const patrikas = await Patrika.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: patrikas,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;