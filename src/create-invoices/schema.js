const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
    firstNumber: Joi.number().integer().positive().required(),
    lastNumber: Joi.number().integer().positive().required(),
    minDate: Joi.date().iso().required(),
    maxDate: Joi.date().iso().required(),
    serie: Joi.string().trim().max(20)
});

const now = new Date();
const defaultParams = {
    firstNumber: 1,
    lastNumber: 100,
    minDate: new Date(now.getFullYear(), now.getMonth(), 1),
    maxDate: new Date(now.getFullYear(), now.getMonth() + 1, 0)
}


const isValid = (options) => {
    
    const params = {
        firstNumber: options.firstNumber || defaultParams.firstNumber,
        lastNumber: options.lastNumber || defaultParams.lastNumber,
        minDate: options.minDate || defaultParams.minDate.toISOString(),
        maxDate: options.maxDate || defaultParams.maxDate.toISOString()
    }
    
    return Joi.validate(params, schema, (err, values) => {
        if (err) {
            return {error: err.details}
        }
        
        return {error: false, values};
    });
    
}


module.exports = isValid;
