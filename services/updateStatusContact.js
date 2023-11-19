const { RequestError } = require('../helpers');
const { Contact } = require('../models/contact');

const updateStatusContact = async (contactId, body) => {
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });

  if (!result) throw RequestError(404, 'Not found');
  return result;
};

module.exports = updateStatusContact;
