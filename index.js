const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4111;


const dotenv = require("dotenv");
dotenv.config();


//Middleware for urlencoded data
app.use(express.urlencoded({extended: false}));

//middleware for json
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', require('./routes/root'));



//I commented out this code just in case it messes with the page retrievals
//The web server should now serve our html pages
//app.set('view engine', 'ejs');

//Routes
//app.use('/', require('./routes/login'));

app.listen(PORT,console.log("Server has started at port " + PORT)); 