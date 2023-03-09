const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4111;


const dotenv = require("dotenv");
dotenv.config();

/*

Template for adding new pages that are servable from the webserver

Replace the fileName with the name of your webpage without touching anything else

app.get('fileName(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'fileName.html'));
});

*/

//Serve a page, lacking images and other files
//semesterView page and will be treated as index page
app.get('^/$|index(.html)?|semesterView(.html)', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'semesterView.html'));
});

//monthView page
app.get('/monthView(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'monthView.html'));
});

//delete page
app.get('/delete(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'delete.html'));
});

//deleteConfirm page
app.get('/deleteConfirm(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'deleteConfirm.html'));
});

//add page
app.get('/add(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'add.html'));
});

//edit page
app.get('/edit(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'edit.html'));
});

//I commented out this code just in case it messes with the page retrievals
//The web server should now serve our html pages
//app.set('view engine', 'ejs');

//Routes
//app.use('/', require('./routes/login'));

app.listen(PORT,console.log("Server has started at port " + PORT)); 