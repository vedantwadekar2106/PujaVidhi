const generatePatrikaId = () => {
  const random = Math.floor(1000 + Math.random() * 9000);
  return `PTR-${random}`;
};

module.exports = generatePatrikaId;