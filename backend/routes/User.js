const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const checkPassword = require('../middleware/password-validator');
const checkEmail = require('../middleware/email-validator');

router.post('/signup', checkPassword, checkEmail, userController.signup);
router.post('/login', userController.login);

module.exports = router;