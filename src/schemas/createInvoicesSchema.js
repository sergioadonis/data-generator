const Joi = require('@hapi/joi');


const schema = Joi.object().keys({
    first: Joi.number().integer().positive().required(),
    last: Joi.number().integer().positive().required(),
    minDate: Joi.date().iso().required(),
    maxDate: Joi.date().iso().required(),
    serie: Joi.string().alphanum().trim().max(20)
});



module.exports = schema;
