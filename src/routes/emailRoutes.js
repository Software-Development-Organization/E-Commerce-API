const express = require('express');
const { sendMailHandler } = require('../controllers/emailController');

const router = express.Router();

router.post('/send', sendMailHandler);

module.exports = router;
