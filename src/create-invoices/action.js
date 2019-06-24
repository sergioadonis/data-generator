const fs = require("fs");
const { parseAsync } = require("json2csv");
const moment = require("moment");
const Joi = require("@hapi/joi");
const schema = require("./schema");

const isValid = (params) => {
    return Joi.validate(params, schema, (err, values) => {
        if (err) {
            return {error: err}
        }
        
        return {error: false, values};
    });
}

const generateInvoices = (values) => {
   
    const { firstNumber, lastNumber, minDate, maxDate, serie } = values;
    
    const minDateParsed = moment(minDate);
    const maxDateParsed = moment(maxDate);
    
    const count = Math.abs(firstNumber - lastNumber) + 1;
    const step = firstNumber < lastNumber ? 1: lastNumber < firstNumber ? -1: 0;
    const diff = maxDateParsed.diff(minDateParsed) / Math.abs(firstNumber - lastNumber);
    
    let data = [];
    
    for (var i = 0; i < count; i++) {
            const date = minDateParsed.clone().add(i * diff).format();
            const number = firstNumber + (i * step);
            
            data[i] = { serie, number, date }
        }
    
    return data;
    
}

const saveInvoices = ({filename, data, headers}) => {
    const opt = {
        fields: headers
    };
    
    parseAsync(data, opt)
        .then(csv => {
            const opt = {
                flag: 'w'
            };
            fs.appendFile(filename, csv, opt, (err) => {
                if (err) throw err;
                console.log(`Writed ${data.length} records on ${filename} file.`);
            })
        })
        .catch(err => console.error(err));
}

const action = (options) => {
    
    const now = new Date();
    const defaultParams = {
        firstNumber: 1,
        lastNumber: 100,
        minDate: new Date(now.getFullYear(), now.getMonth(), 1),
        maxDate: new Date(now.getFullYear(), now.getMonth() + 1, 0),
        serie: 'ABC-001'
    }
    const params = {
        firstNumber: options.firstNumber || defaultParams.firstNumber,
        lastNumber: options.lastNumber || defaultParams.lastNumber,
        minDate: options.minDate || defaultParams.minDate.toISOString(),
        maxDate: options.maxDate || defaultParams.maxDate.toISOString(),
        serie: options.serie || defaultParams.serie
    }
    
    const result = isValid(params);
    
    if (!result.error) {
        const json = generateInvoices(result.values);
        const name = `invoices-data.csv`;
        const headers = ['serie', 'number', 'date'];
        
        return saveInvoices({
            filename: name, data: json, headers
        });
    }
    
    console.error(result.error.details);
    
}


module.exports = action