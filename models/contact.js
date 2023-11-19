const { Schema, model } = require('mongoose');
const { handleSaveErrors } = require('../helpers');
const Joi = require('joi');

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
  },
  { versionKey: false }
);

contactSchema.post('save', handleSaveErrors);

const postSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  phone: Joi.string()
    .pattern(phoneRegexp)
    .messages({
      'string.pattern.base':
        'Phone number should be in the following format: (123) 456-7890',
    })
    .required(),
  favorite: Joi.boolean(),
});

const putSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  phone: Joi.string().pattern(phoneRegexp).messages({
    'string.pattern.base':
      'Phone number should be in the following format: (123) 456-7890',
  }),
  favorite: Joi.boolean(),
});

const patchSchema = Joi.object({
  favorite: Joi.boolean(),
});

const Contact = model('contact', contactSchema);

const schemas = {
  postSchema,
  putSchema,
  patchSchema,
};

module.exports = {
  Contact,
  schemas,
};
