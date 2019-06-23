const moment = require("moment");


const main = (options) => {
    const {first, last, serie, minDate, maxDate} = options;
    
    const minDateParsed = moment(minDate);
    const maxDateParsed = moment(maxDate);
    
    const count = Math.abs(first - last) + 1;
    const step = first < last ? 1: last < first ? -1: 0;
    const diff = maxDateParsed.diff(minDateParsed) / Math.abs(first - last);
    
    let data = [];
    
    for (var i = 0; i < count; i++) {
        const date = minDateParsed.clone().add(i * diff).format();
        const number = first + (i * step);
        
        data[i] = {
            serie,
            number,
            date
        }
    }
    
    return data;
}

module.exports = main;