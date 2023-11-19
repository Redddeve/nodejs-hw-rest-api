const { updateStatusContact } = require('../services');

const updateFavorite = async (req, res) => {
  if (!Object.keys(req.body).length)
    return res.json({ message: 'Missing field favorite' });

  const { contactId } = req.params;
  const result = await updateStatusContact(contactId, req.body);

  res.json(result);
};

module.exports = updateFavorite;
