let _ = require('lodash');
let commonFields = {
    created : Date,
    modified : Date
}

module.exports = {
    addCommonFields  : function (fileds){
        _.extend(fileds, commonFields);
    }

}