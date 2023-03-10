const express = require('express');
const router = express.Router();
const path = require('path');

/*

Template for adding new pages that are servable from the webserver

Replace the fileName with the name of your webpage without touching anything else

router.get('/fileName(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'fileName.html'));
});

*/

//Serve a page, lacking images and other files
//semesterView page and will be treated as index page
router.get('^/$|index(.html)?|semesterView(.html)', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'semesterView.html'));
});

//monthView page
router.get('/monthView(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'monthView.html'));
});

//delete page
router.get('/delete(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'delete.html'));
});

//deleteConfirm page
router.get('/deleteConfirm(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'deleteConfirm.html'));
});

//add page
router.get('/add(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add.html'));
});

//maintenance page
router.get('/maintenance(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'maintenance.html'));
});

//edit page
router.get('/edit(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'edit.html'));
});

//login page
router.get('/login(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

module.exports = router;
