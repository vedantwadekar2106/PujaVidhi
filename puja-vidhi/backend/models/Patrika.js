const mongoose = require("mongoose");

const patrikaSchema = new mongoose.Schema(
  {
    patrikaId: {
      type: String,
      unique: true,
      index: true,
    },

    userId: {
      type: String,
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    fatherName: String,
    motherName: String,

    dob: {
      type: Date,
      required: true,
    },

    tob: {
      type: String,
      required: true,
    },

    place: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patrika", patrikaSchema);

