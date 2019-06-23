const Joi = require("@hapi/joi");
const schema = require("./src/schemas/createInvoicesSchema");
const command = require("./src/commands/createInvoicesCommand");


const now = new Date();
const month = now.getMonth();
const year = now.getFullYear();
const minDate = new Date(year, month, 1);
const maxDate = new Date(year, month + 1, 0);

const options = {
    first: 10,
    last: 12,
    serie: 'SDC0001',
    minDate: minDate.toISOString(),
    maxDate: maxDate.toISOString()
}

Joi.validate(options, schema, (err, value) => {
    if (err) {
        console.error(err.details);
        return
    }
    
    command(value);
});
    
