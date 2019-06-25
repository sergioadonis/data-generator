const fs = require("fs");
const { parseAsync } = require("json2csv");

const saveInvoices = ({filename, data}) => {
    if (data.length == 0) {
        const error = 'No data';
        return {error}
    }
    
    const first = data[0];
    const fields = Object.keys(first).map(k => k);
    const opt = {fields};
    
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