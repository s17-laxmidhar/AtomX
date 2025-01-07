const express = require('express');
const { signup, login } = require('../controllers/auth.controller');
const { signupValidation, loginValidation } = require('../utils/validation');
const { validationRequestBodyMiddleware } = require('../middlewares/validation.middleware');

const router = express.Router();

router.post('/signup', validationRequestBodyMiddleware(signupValidation), signup);
router.post('/login', validationRequestBodyMiddleware(loginValidation), login);

module.exports = router;
