//Breaking stuff for fun

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema( {
    description: String,
    strtDate: Date,
    endDate: Date,
    year: String,
    semester: String,
}, {typeKey: '$type', versionKey: false});

/* const eventSchema = new Schema({
    strtDate: {
        type: Date
    },
    endDate: { 
        type: Date
    },
    semester: {
        type: String
    },
    year: {
        type: String
    },
    description: {
        type: String
    }
}, {typeKey: '$type'}); */

module.exports = mongoose.model('Event', eventSchema);