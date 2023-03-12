const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
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
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = eventSchema;