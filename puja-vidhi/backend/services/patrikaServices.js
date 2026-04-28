const Patrika = require("../models/Patrika");
const generateId = require("../utils/generatePatrikaId");
const sendEmail = require("./emailService");

const createPatrika = async (data) => {
  const patrikaId = generateId();

  const patrika = new Patrika({
    patrikaId,
    userId: data.userId,
    name: data.name,
    gender: data.gender,
    fatherName: data.fatherName,
    motherName: data.motherName,
    dob: data.dob,
    tob: data.tob,
    place: data.place
  });

  await patrika.save();

  if (data.email) {
    await sendEmail(data.email, data.name, patrikaId);
  }

  return patrika;
};

const getAllPatrikas = async () => {
  return await Patrika.find().sort({ createdAt: -1 });
};

module.exports = { createPatrika, getAllPatrikas };