const express = require('express');
const router = express.Router();
const deleteController = require('../controllers/datesController');

router.post('/', deleteController.handleDelete);

module.exports = router;