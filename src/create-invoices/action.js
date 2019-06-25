const isValid = require("./schema");
const generateInvoices = require("./mockService");
const saveInvoices = require("./fsService");


const action = (options) => {
    const result = isValid(options);
    
    if (!result.error) {
        const json = generateInvoices(result.values);
        const name = options.fileName || `invoices-data.csv`;
        const headers = ['serie', 'number', 'date'];
        
        return saveInvoices({
            filename: name, data: json, headers
        });
    }
    
    console.error(result.error);
    
}


module.exports = action