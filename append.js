const fs = require('fs')
let lastDoc = process.argv[process.argv.length - 1]
let tab = []

// Longueur de nos arguments
if (process.argv.length < 4) {
  console.log(`Error: length is not defined`)
  process.exit(1)
}
// check if the path exist
for (let i = 2; i < process.argv.length; i++) {
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Désolé, ${process.argv[i]} n\'existe pas`)
    process.exit(1)
  }
  //envoi des documents lu dans tab
  tab.push(fs.readFileSync(process.argv[i], 'utf-8'))
}
console.log(tab)

// mettre l’elem du tab dans lastDoc
for (const elem of tab) {
  fs.appendFileSync(lastDoc, elem)
}