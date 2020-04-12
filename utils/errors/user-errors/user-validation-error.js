//let Error = require('errors');

class UserValidationError extends Error {
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name;
        this.status = status || 422;
    }
}

module.exports = UserValidationError;