const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profile');

router.post('/', profileController.index);

module.exports = router;
