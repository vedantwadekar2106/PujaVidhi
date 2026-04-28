const jwt = require("jsonwebtoken");

const SECRET = "PUJA_SECRET";

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.json({ message: "No token" });

  try {
    const data = jwt.verify(token, SECRET);
    req.userId = data.userId;
    next();
  } catch {
    res.json({ message: "Invalid token" });
  }
};