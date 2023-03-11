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


//Routes
//app.use('/', require('./routes/login'));
app.use('/', require('./routes/root'));
app.use('/auth', require('./routes/auth'));
app.use('/register', require('./routes/register'));


//I commented out this code just in case it messes with the page retrievals
//The web server should now serve our html pages
//app.set('view engine', 'ejs');



app.listen(PORT,console.log("Server has started at port " + PORT)); 