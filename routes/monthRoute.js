const express = require('express');
const router = express.Router();
const monthController = require('../controllers/monthController');

router.get('/', monthController.handleGetMonth);

module.exports = router;