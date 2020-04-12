let UserValidationError = require('./user-validation-error');

class UserError {
    static throwError(message){
        throw new UserValidationError(message);
    }
    static createUser(user){
        if(!user.email){
            this.throwError("Email is required!");
        }
        if(!user.dateOfBirth){
            this.throwError("Date Of Birth is required!");
        }
        if(!user.termsAndCondition){
            this.throwError("Please accept terms and condition");
        }

    }
}

module.exports = UserError;