const express = require('express');
const router = express.Router();
const semesterController = require('../controllers/datesController');

router.post('/', semesterController.handleGetSem);

module.exports = router;