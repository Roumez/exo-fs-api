const fs = require('fs')


//Error nb arg
if (process.argv.length === 3) {
  if (process.argv.length !== 3) {
    console.log(`Error: node wc.js file`)
    process.exit(1)
  }
  //error file not found
  if (!fs.existsSync(process.argv[2])) {
    console.log(`Error ${process.argv[2]} not found, file.txt`)
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

} else if (process.argv.length === 4) {

  //Error nb arg
  if (process.argv.length !== 4) {
    console.log(`Error: node wc.js file`)
    process.exit(1)
  }

  //error file not found
  if (!fs.existsSync(process.argv[3])) {
    console.log(`Error ${process.argv[3]} not found`)
    process.exit(1)
  }
  //read my file
  const read = fs.readFileSync(process.argv[3], 'utf-8')

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

  if (process.argv.length === 3) {
    console.log(`${nbLines}    ${nbWords}     ${nbCar}     ${process.argv[2]}`)
    process.exit(1)
  }
  if (process.argv[2] === '-l') {
    console.log(`${nbLines} ${process.argv[3]}`)
  } else if (process.argv[2] === '-w') {
    console.log(`${nbWords} ${process.argv[3]}`)
  } else if (process.argv[2] === '-c') {
    console.log(`${nbCar} ${process.argv[3]}`)
  } else {
    console.log(`Error: node wc.js -Your letter (l, w, c) file.txt`)
    process.exit(1)
  }


} else {
  console.log('Error: node wcPlus.js -(l, w, c) file.txt')
}
