const express = require('express');
const router = express.Router();
const populateDeleteController = require('../controllers/populateDeleteController');

router.post('/', populateDeleteController.handlePopulate);

module.exports = router;