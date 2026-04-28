const {
  addFeedbackService,
  getAllFeedbackService,
} = require("../services/feedbackServices");

exports.addFeedback = async (req, res) => {
  try {
    const data = await addFeedbackService(req.userId, req.body);
    res.json({ message: "Feedback added", data });
  } catch (err) {
    res.json({ message: "Error saving feedback" });
  }
};

exports.getFeedbacks = async (req, res) => {
  const data = await getAllFeedbackService();
  res.json(data);
};