const moment = require("moment");

const generateInvoices = (values) => {
   
    const { firstNumber, lastNumber, minDate, maxDate } = values;
    
    const minDateParsed = moment(minDate);
    const maxDateParsed = moment(maxDate);
    
    const count = Math.abs(firstNumber - lastNumber) + 1;
    const step = firstNumber < lastNumber ? 1: lastNumber < firstNumber ? -1: 0;
    const diff = maxDateParsed.diff(minDateParsed) / Math.abs(firstNumber - lastNumber);
    
    let data = [];
    
    for (var i = 0; i < count; i++) {
        const date = minDateParsed.clone().add(i * diff).format();
        const docNumber = firstNumber + (i * step);
        
        data[i] = { 
            number: i + 1,
            date,
            serie: 'SC0001', 
            documentNumber: docNumber, 
            documentType: 'CCF',
            customerNrc: '0102-34',
            customerName: 'Un cliente cualquiera "A-Z" S.A. de C.V.',
            exempted: 0,
            affected: 1250.14,
            iva: 130.69,
            total: 1393.68
        }
    }
    
    return data;
    
}

module.exports = generateInvoices;