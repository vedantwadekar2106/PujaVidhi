const generatePatrikaId = () => {
  const random = Math.floor(100000 + Math.random() * 900000);
  return "PATRIKA" + random;
};

module.exports = generatePatrikaId;