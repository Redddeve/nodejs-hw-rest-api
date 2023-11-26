const express = require('express');
const ctrl = require('../../controllers/contacts');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../schemas/contact');
const { ctrlWrapper } = require('../../helpers');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(ctrl.getAll));

router.get('/:contactId', authenticate, ctrlWrapper(ctrl.getById));

router.post(
  '/',
  authenticate,
  validateBody(schemas.postSchema),
  ctrlWrapper(ctrl.add)
);

router.put(
  '/:contactId',
  authenticate,
  validateBody(schemas.putSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  validateBody(schemas.patchSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete('/:contactId', authenticate, ctrlWrapper(ctrl.removeById));

module.exports = router;
