const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearSchema = new Schema({
    year: String
}, {typeKey: '$type', versionKey: false});

module.exports = mongoose.model('Year', yearSchema);