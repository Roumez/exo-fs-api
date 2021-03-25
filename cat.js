const fs = require('fs')

// Longueur de nos arguments
if (process.argv.length !== 4) {
  console.log(`Error: length is not defined`)
  process.exit(1)
}
// check if the path exist
for (let i = 0; i < process.argv.length; i++) {
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Désolé, ${process.argv[i]} n\'existe pas`)
    process.exit(1)
  }
}


const poem = fs.readFileSync(process.argv[2], 'utf-8')
const dst = fs.readFileSync(process.argv[3], 'utf-8')

console.log(poem)
console.log(dst)
