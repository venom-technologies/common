let mongoose = require('mongoose');
let userSchema = require('./user-schema');
let ValidationError = require('../../common-functions/errors/validation-error')

userSchema.statics = {
    getDetails,
    addUserDeatils
}

userSchema.index({ username: 1, background: 1 });

userSchema.pre('save', async function(next){
    let doc = this;
    if(doc.username){
        console.log(doc.username);
    }
});


UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;

async function getDetails(userId) {
    try {
        let query = {};
        query._id = userId;
        let userDetails = await userModel.find(query).lean().exec();
        if (!userDetails) {
            console.log("No User Found!");
        }
        return userDetails

    } catch (eroor) {
        throw error;
    }
}

async function addUserDeatils(userData) {
    try {
        if (!userData.number) {
            throw new ValidationError("Number Is Required !");
        }
        let userDetails = await UserModel.findOne({number : uesrData.number}).exec();
        if(userDetails){
            throw new ValidationError("User already exists!");
        }
        let user = new UserModel(userData);
        return await user.save();

    } catch (error) {
        throw error;
    }

}