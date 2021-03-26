const fs = require('fs')

const OP1_FILE = 'op1.txt'
const OP2_FILE = 'op2.txt'
const OPERATOR_FILE = 'operator.txt'
const RES_FILE = 'res.txt'
//import calc

// check command line
//check if files exist

const op1Str = fs.readFileSync(OP1_FILE, 'utf-8')
const op2Str = fs.readFileSync(OP2_FILE, 'utf-8')
const operatorStr = fs.readFileSync(OPERATOR_FILE, 'utf-8')

const op1Tab = op1Str.split('\n')
const op2Tab = op2Str.split('\n')
const operatorTab = operatorStr.split('\n')
const res = []

for (let i = 0; i < op1Tab.length; i++) {
  //Check if op1Tab[i] op2Tab[i] is a number
  res.push(calc(operatorTab[i], Number(op1Tab[I], Number(op2Tab[i]))))
}
console.log(res)
// convertir res en string
const resStr = res.join('\n')
// ecrire res dans res_file
fs.writeFileSync(RES_FILE, resStr)