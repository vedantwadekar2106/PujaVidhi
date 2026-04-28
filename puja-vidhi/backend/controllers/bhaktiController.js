const { getBhaktiServices } = require("../services/bhaktiServices");

exports.getBhaktiList = (req, res) => {
  const data = getBhaktiServices();
  res.json(data);
};