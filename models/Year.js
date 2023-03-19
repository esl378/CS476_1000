const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Model/class for year elements in the database
const yearSchema = new Schema({
    year: String
}, {typeKey: '$type', versionKey: false});

module.exports = mongoose.model('Year', yearSchema);