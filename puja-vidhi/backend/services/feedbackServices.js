const Feedback = require("../models/Feedback");

// Add feedback
exports.addFeedbackService = async (userId, data) => {
  const feedback = new Feedback({
    userId,
    ...data,
  });

  return await feedback.save();
};

// Get all feedback
exports.getAllFeedbackService = async () => {
  return await Feedback.find();
};