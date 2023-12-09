const { ctrlWrapper } = require('../../helpers');

const add = require('./add');
const getAll = require('./getAll');
const getById = require('./getById');
const updateById = require('./updateById');
const removeById = require('./removeById');
const updateFavorite = require('./updateFavorite');

module.exports = {
  add: ctrlWrapper(add),
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  updateById: ctrlWrapper(updateById),
  removeById: ctrlWrapper(removeById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
