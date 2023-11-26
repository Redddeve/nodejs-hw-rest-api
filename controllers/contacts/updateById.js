const { updateService } = require('../../services');

const updateById = async (req, res) => {
  const result = await updateService(req);

  res.json(result);
};

module.exports = updateById;
