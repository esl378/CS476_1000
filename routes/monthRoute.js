const express = require('express');
const router = express.Router();
const monthController = require('../controllers/monthController');

router.post('/', monthController.handleGetMonth);

module.exports = router;