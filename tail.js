const fs = require('fs')


// Longueur de nos arguments
if (process.argv.length !== 3) {
  console.log(`Error: length is not defined`)
  process.exit(1)
}
// check if the path exist
if (!fs.existsSync(process.argv[2])) {
  console.log(`Désolé, ${process.argv[2]} n\'existe pas`)
  process.exit(1)
}

const read = fs.readFileSync(process.argv[2], 'utf-8');

let tab = (read.split('\n').slice(-10))

for (let elem of tab) {
  console.log(elem)
}