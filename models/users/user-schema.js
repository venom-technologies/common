let mongoose = require('mongoose');
let baseSchema = require('../base-schema');

let fields = {
    phoneNumber: {
        type: String,
        required: false
    },
    email : {
        type : String,
        required : true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth : {
        type : Date,
        required : true
    },
    termsAndCondition : Boolean,
    country : {
        type :String,
        enum : ["India", "USA", "UK"]
    },
    countryCode : {
        type : Number
    },
    status : {
        type : String,
        enum : ["Active", "Inactive"]
    },
    channelCount : {
        type : Number,
        default : 0
    }
}
baseSchema.addCommonFields(fields);
var userSchema = new mongoose.Schema(fields);

module.exports = userSchema