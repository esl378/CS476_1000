
//Breaking stuff for fun
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
    year: String, //"yyyy-yyyy"
    name: String, //"sem_yyyy"
    strtDate: String,
    endDate: String,
    heldIn: String
}, {typeKey: '$type', versionKey: false});

/* const semesterSchema = new Schema({
    name: {
        type: String //"sem_yyyy"
    },
    heldIn:{
        type:String
    },
    //Changed from Date to string "Don't hurt me James"
    strtDate: {
        type: String
    },
    //Changed from Date to string "Don't hurt me James"
    endDate: { 
        type: String
    },
    year: {
        type: String //"yyyy-yyyy"
    }
}, {typeKey: '$type'}); */

module.exports = mongoose.model('Semester', semesterSchema);