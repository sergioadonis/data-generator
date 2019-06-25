#!/usr/bin/env node
const program = require("commander");
const createInvoice = require("./create-invoices/action");


program.version("0.0.1").description("CLI to generate random data files for development tests.");

// Commands
program
    .command('create-invoices [filename]')
    .option('-f, --firstNumber <firstNumber>', 'The first number')
    .option('-l, --lastNumber <lastNumber>', 'The last number')
    .option('-m, --minDate <minDate>', 'The minimun date')
    .option('-M, --maxDate <maxDate>', 'The maximun date')
    .alias('ci')
    .description('Create invoices to filename in CSV format. Default filename is invoices-data.csv')
    .action((filename, options) => createInvoice({filename, ...options}));
    
program.parse(process.argv);
