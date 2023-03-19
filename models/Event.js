//Model/class for event elements in the database

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema( {
    description: String,
    strtDate: Date,
    endDate: Date,
    year: String,
    semester: String,
}, {typeKey: '$type', versionKey: false});



module.exports = mongoose.model('Event', eventSchema);