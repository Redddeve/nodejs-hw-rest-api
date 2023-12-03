const { Schema, model } = require('mongoose');
const { handleSaveErrors } = require('../helpers');
const allowedSubs = ['starter', 'pro', 'business'];

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: allowedSubs,
      default: 'starter',
    },
    token: String,
    avatarURL: String,
  },
  { versionKey: false }
);

userSchema.post('save', handleSaveErrors);

const User = model('user', userSchema);

module.exports = {
  User,
};
