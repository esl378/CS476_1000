const express = require('express');
const router = express.Router();
const populateSemesterController = require('../controllers/datesController');

router.post('/', populateSemesterController.handleGetSem);

module.exports = router;