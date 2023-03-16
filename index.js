require('dotenv').config();
const http = require('http');
const express = require('express');
const path = require('path');
const cors = require('cors');
const verifyjwt = require('./middleware/verifyJWT');
const authCheck = require('./middleware/authCheck');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const corsOptions = require('./config/corsOptions');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 4111;

//connect to MongoDB
connectDB();

//html render engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Handle options credentials check
//also fetch cookies credentials requirement
app.use(credentials);

//cross origin resource sharing
app.use(cors(corsOptions));

//Middleware for urlencoded data
app.use(express.urlencoded({extended: false}));

//middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use(express.static(path.join(__dirname, '/public')));


//ADD MIDDLEWARE FOR ROUTS HERE
app.use('/maintenance(.html)?',verifyjwt);
app.use('/delete(.html)?', verifyjwt);
app.use('/confirm(.html)?', verifyjwt);
app.use('/edit(.html)?', verifyjwt);
app.use('/add(.html)?', verifyjwt);

//app.use('/', require('./routes/login'));
app.use('/', require('./routes/root'));
app.use('/auth', require('./routes/auth'));
app.use('/register', require('./routes/register'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use('/mRoute', require('./routes/monthRoute'));
app.use('/sRoute', require('./routes/semesterRoute'));
app.use('/getEvents', require('./routes/getEvents'));
app.use('/getYears', require('./routes/getYears'));
app.use('/getSemesters', require('./routes/getSemesters'));
app.use('/semp', require("./routes/semPop")); 




app.use(verifyjwt);
app.use('/del', require("./routes/del")); //used to test that the verification works
app.use('/delp', require("./routes/populate")); //used to test that the verification works
app.use('/add', require('./routes/add'));
app.use('/putYear', require('./routes/putYear'));
//I commented out this code just in case it messes with the page retrievals
//The web server should now serve our html pages
//app.set('view engine', 'ejs');


mongoose.connection.once('open', () => {
    console.log("connected to MongoDB");
    app.listen(PORT,console.log("Server has started at port " + PORT)); 
})
