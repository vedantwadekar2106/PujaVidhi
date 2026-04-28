const service = require("../services/patrikaService");

exports.createPatrika = async (req, res) => {
  try {
    const patrika = await service.createPatrika(req.body);

    res.json({
      success: true,
      message: "Patrika saved",
      data: { patrikaId: patrika.patrikaId }
    });

  } catch (err) {
    res.json({ success: false, message: "Server error" });
  }
};

exports.getAllPatrikas = async (req, res) => {
  try {
    const data = await service.getAllPatrikas();
    res.json({ success: true, data });
  } catch {
    res.json({ success: false });
  }
};