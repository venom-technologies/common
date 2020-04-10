let mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"]
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number
    },
    email: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})