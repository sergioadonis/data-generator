const fs = require("fs");
const { parseAsync } = require("json2csv");

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
                console.log(`Writed ${data.length} records in ${filename} file.`);
            })
        })
        .catch(err => console.error(err));
}

module.exports = saveInvoices;