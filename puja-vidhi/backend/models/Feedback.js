const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },

    bookingId: {
      type: String,
      required: true,
      unique: true, // one feedback per booking
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
