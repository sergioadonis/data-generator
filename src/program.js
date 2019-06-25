#!/usr/bin/env node
const program = require("commander");
const createInvoice = require("./create-invoices/action");


program.version("0.0.1").description("My utils");

// Commands
program
    .command('create-invoices [fileName]')
    .option('-f, --firstNumber <firstNumber>', 'The first number')
    .option('-l, --lastNumber <lastNumber>', 'The last number')
    .option('-m, --minDate <minDate>', 'The minimun date')
    .option('-M, --maxDate <maxDate>', 'The maximun date')
    .option('-s, --serie <serie>', 'The serie')
    .alias('ci')
    .description('Create invoices')
    .action((fileName, options) => createInvoice({fileName, ...options}));
    
program.parse(process.argv);
