const express = require('express');
const ctrl = require('../../controllers');
const { validateBody } = require('../../middlewares');
const { schemas } = require('../../models/contact');
const { ctrlWrapper } = require('../../helpers');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validateBody(schemas.postSchema), ctrlWrapper(ctrl.add));

router.put(
  '/:contactId',
  validateBody(schemas.putSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:contactId/favorite',
  validateBody(schemas.patchSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

module.exports = router;
