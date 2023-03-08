const express = require('express');
const app = express();
app.listen(PORT, console.log("Server don start for port: " + PORT))

const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

//mongoDB connection
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log('e don connect'))
.catch(err => console.log(err));


app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/login'));
const PORT = process.env.PORT || 4111;
app.listen(PORT,console.log("Server has started at port " + PORT)); 