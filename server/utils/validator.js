const validator = require("express-joi-validation")

const validate = () => {

    return validator.createValidator({})
}

module.exports = validate