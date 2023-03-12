const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearSchema = new Schema({
    year: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Year', yearSchema);