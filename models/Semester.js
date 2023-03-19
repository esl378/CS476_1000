
//Model/class for semester elements in the database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
    name: String, //"sem_yyyy"
    strtDate: Date,
    endDate: Date,
    year: String, //"yyyy-yyyy"
    heldIn: String
}, {typeKey: '$type', versionKey: false});

module.exports = mongoose.model('Semester', semesterSchema);