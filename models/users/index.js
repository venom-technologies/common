let mongoose = require('mongoose');
let userSchema = require('./user-schema');
let UserValidationError = require('../../utils/errors/user-errors')

userSchema.statics = {
    getDetails,
    addUserDeatils,
    getUserList
}

userSchema.index({ username: 1 }, { background: 1 });

userSchema.pre('save', async function (next) {
    let doc = this;
    if (doc.username) {
        console.log(doc.username);
    }
    next()
});


UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;

async function getDetails(_id) {
     if (!_id) {
        UserValidationError.throwError("User Id is required!");
    }
    let userDetails = await userModel.findOne({ _id }).lean().exec();
    if (!userDetails) {
        UserValidationError.throwError("No User Found!");
    }
    return userDetails;
}

async function addUserDeatils(userData) {
    UserValidationError.createUser(userData)
    let userDetails = await UserModel.findOne({ email: uesrData.email }).exec();
    if (userDetails) {
        UserValidationError.throwError("User already exists!");
    }
    return new UserModel(userData).save();
}

async function getUserList(filter){
    return await userModel.find({}).sort({_id : -1}).skip(0).limit(20).lean();
}