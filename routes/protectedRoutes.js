const express = require('express');
const router = express.Router();
const path = require('path');

//delete page
router.get('/delete(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'delete.html'));
});

//deleteConfirm page
router.get('/confirm(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'deleteConfirm.html'));
});

module.exports = router;