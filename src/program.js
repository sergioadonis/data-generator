#!/usr/bin/env node

const program = require("commander");
const createInvoice = require("./create-invoices/action");


program.version("0.0.1").description("My utils");

// Commands
program
    .command('create-invoices [firstNumber] [lastNumber] [minDate] [maxDate] [serie]')
    .alias('ci')
    .description('Create invoices')
    .action((firstNumber, lastNumber, minDate, maxDate, serie) => createInvoice({
        firstNumber, lastNumber, minDate, maxDate, serie
    }));
    
program.parse(process.argv);
