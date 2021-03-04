const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/signup', authController.signup);
router.post('/isemail', authController.isEmail);

module.exports = router;
