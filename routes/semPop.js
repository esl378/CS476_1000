const express = require('express');
const router = express.Router();
const populateSemesterController = require('../controllers/semesterController');

router.post('/', populateSemesterController.handleGetSem);

module.exports = router;