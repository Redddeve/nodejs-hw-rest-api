const express = require('express');
const ctrl = require('../../controllers/users');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../schemas/user');
const { ctrlWrapper } = require('../../helpers');

const router = express.Router();

router.post(
  '/register',
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.post(
  '/login',
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));

router.post('/logout', authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  '/',
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrlWrapper(ctrl.subscription)
);

module.exports = router;
