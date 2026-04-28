const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    service: {
      type: String,
      enum: ["Udak Shanti", "Vastu Shanti", "Satyanarayan"],
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
      index: true,
    },

    // 💰 Payment fields
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },

    paymentMethod: {
      type: String,
      default: "",
    },

    txnId: {
      type: String,
      default: "",
    },

    advanceAmount: {
      type: Number,
      default: 500,
    },
  },
  { timestamps: true }
);

// Index for admin filtering
bookingSchema.index({ userId: 1, status: 1 });

module.exports = mongoose.model("Booking", bookingSchema);
