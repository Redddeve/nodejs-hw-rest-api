const express = require('express');
const ctrl = require('../../controllers/contacts');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../schemas/contact');

const router = express.Router();

router.get('/', authenticate, ctrl.getAll);

router.get('/:contactId', authenticate, ctrl.getById);

router.post('/', authenticate, validateBody(schemas.postSchema), ctrl.add);

router.put(
  '/:contactId',
  authenticate,
  validateBody(schemas.putSchema),
  ctrl.updateById
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  validateBody(schemas.patchSchema),
  ctrl.updateFavorite
);

router.delete('/:contactId', authenticate, ctrl.removeById);

module.exports = router;
