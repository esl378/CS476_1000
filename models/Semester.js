const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
    name: {
        type: String
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
        type: String
    }
}, {typeKey: '$type'});

module.exports = mongoose.model('Semester', semesterSchema);