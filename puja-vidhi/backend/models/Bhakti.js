const mongoose = require("mongoose");

const bhaktiSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: ["Aarti", "Bhajan", "Shlok"],
      required: true,
    },

    lyrics: {
      type: String,
      required: true,
    },

    audioUrl: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Index for fast search
bhaktiSchema.index({ title: "text" });

module.exports = mongoose.model("Bhakti", bhaktiSchema);