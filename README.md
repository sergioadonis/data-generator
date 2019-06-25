# data-generator
CLI to generate random data files for development tests.

## Get started
Requirements
 - Node
 - Npm
 - Git
 
Download (clone):
```bash
git clone https://github.com/sergioadonis/data-generator.git
```

Install (link):
```bash
cd data-generator
npm install
npm link
```

Run:
```bash
data-generator --version
data-generator --help
```

## Commands
### create-invoices | ci
Create invoices to filename in CSV format. Default filename is invoices-data.csv

#### Default usage
```bash
data-generator create-invoices
```
Or shorter using _ci_ alias
```bash
data-generator ci
```
Both cases generate a file with _invoices-data.csv_ as default name

#### Specifying a filename
Specifying a filename to store data generated
```bash
data-generator ci [filename]
```

#### Aditional options
Options:
 * -f, --firstNumber <firstNumber>  The first number
 * -l, --lastNumber <lastNumber>    The last number
 * -m, --minDate <minDate>          The minimun date
 * -M, --maxDate <maxDate>          The maximun date
 * -s, --serie <serie>              The serie
 * -h, --help                       output usage information
  
#### Examples
Generates a file with defaul name from _1_ to _100_ numbers.
```bash
data-generator ci
```
Generates a file with [filename] from 100 to 999 numbers.
```bash
data-generator ci [filename] -f 100 -l 999
```
Generates a file with [filename] from _100_ to _999_ numbers and _SDC001_ as serie.
```bash
data-generator ci [filename] -f 100 -l 999 --serie 'SDC001'
```
Generates a file with [filename] from _100_ to _999_ numbers, between _2019-06-01_ and _2019-06-30_ and _SDC001_ as serie.
```bash
data-generator ci [filename] -f 100 -l 999 -m '2019-06-01' -M '2019-06-30' --serie 'SDC001'
```
