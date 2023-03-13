const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
    name: {
        type: String //"sem_yyyy"
    },
    heldIn:{
        type:String
    },
    strtDate: {
        type: Date
    },
    endDate: { 
        type: Date
    },
    year: {
        type: String //"yyyy-yyyy"
    }
}, {typeKey: '$type'});

module.exports = mongoose.model('Semester', semesterSchema);