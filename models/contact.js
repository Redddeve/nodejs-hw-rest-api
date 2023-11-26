const { Schema, model } = require('mongoose');
const { handleSaveErrors } = require('../helpers');
const mongoosePaginate = require('mongoose-paginate-v2');

const phoneRegexp = /^\(\d{3}\) \d{3}-\d{4}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      match: phoneRegexp,
      unique: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false }
);

contactSchema.post('save', handleSaveErrors);

contactSchema.plugin(mongoosePaginate);

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
};
