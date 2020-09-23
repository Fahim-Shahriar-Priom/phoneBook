const Joi = require('@hapi/joi');

//validation

const addContactValidation = data => {
    const schema = {
        name : Joi.string()
        .required(),
        mobileNumber : Joi.number().min(11).regex(/^(?:\+88|01)?(?:\d{11}|\d{13})$/),
    };
    return Joi.validate(data,schema); 
};

module.exports.addContactValidation = addContactValidation;