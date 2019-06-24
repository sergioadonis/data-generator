const Joi = require('@hapi/joi');


const schema = Joi.object().keys({
    firstNumber: Joi.number().integer().positive().required(),
    lastNumber: Joi.number().integer().positive().required(),
    minDate: Joi.date().iso().required(),
    maxDate: Joi.date().iso().required(),
    serie: Joi.string().trim().max(20)
});



module.exports = schema;
