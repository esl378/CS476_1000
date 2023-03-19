//Model/class for user elements in the database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    pass:{
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema);