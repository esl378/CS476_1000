const express = require('express');
const router = express.Router();
const semesterController = require('../controllers/semesterController');

router.post('/', semesterController.handleGetSemester);

module.exports = router;