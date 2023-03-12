const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    strtDate: {
        type: Date,
        required: true
    },
    endDate: { 
        type: Date,
        required: true
    },
    year: {
        type: String,
        required: true
    }
});

module.exports = semesterSchema;