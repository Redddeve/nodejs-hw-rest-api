const { RequestError } = require('../helpers');
const { Contact } = require('../models/contact');

const updateService = async req => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) throw RequestError(404, 'Not found');
  return result;
};

module.exports = updateService;
