const isValid = require("./schema");
const generateInvoices = require("./mockService");
const saveInvoices = require("./fsService");


const action = (options) => {
    const result = isValid(options);
    
    if (!result.error) {
        const json = generateInvoices(result.values);
        const name = options.filename || `invoices-data.csv`;
        
        return saveInvoices({
            filename: name, data: json
        });
    }
    
    console.error(result.error);
    
}


module.exports = action