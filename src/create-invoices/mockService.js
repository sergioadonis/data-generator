const moment = require("moment");

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

module.exports = generateInvoices;