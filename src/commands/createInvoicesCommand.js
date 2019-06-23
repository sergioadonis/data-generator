const fs = require("fs");
const { parseAsync } = require("json2csv");
const generateInvoice = require("../lib/generateInvoices");


const command = (options) => {
    const json = generateInvoice(options);
    const name = `invoices-data.csv`;
    const opt = {
        fields: ['serie', 'number', 'date']
    };
    
    parseAsync(json, opt)
        .then(csv => {
            const opt = {
                flag: 'w'
            };
            fs.appendFile(name, csv, opt, (err) => {
                if (err) throw err;
                console.log(`Writed ${json.length} records on ${name} file.`);
            })
        })
        .catch(err => console.error(err));
}


module.exports = command