const fs = require('fs')

//Error nb arg
if (process.argv.length !== 3) {
  console.log(`Error: node wc.js file`)
  process.exit(1)
}

//error file not found
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error ${process.argv[2]} not found`)
  process.exit(1)
}

//read my file
const read = fs.readFileSync(process.argv[2], 'utf-8')

// put in tab
const tabLines = read.split('\n')
const tabWords = read.split(' ')
const tabCar = read.split('')

// nb Lines in my tab
let nbLines = tabLines.length
// nb Words in my tab
let nbWords = tabWords.length
// nb caractere in my tab
let nbCar = tabCar.length

// show in terminal
console.log(`${nbLines}    ${nbWords}     ${nbCar}     ${process.argv[2]}`)
