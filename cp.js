const fs = require('fs')

// Longueur de nos arguments
if (process.argv.length !== 4) {
  console.log(`Error: length is not defined`)
  process.exit(1)
}
// check if the path exist
if (!fs.existsSync(process.argv[2])) {
  console.log(`Désolé, ${process.argv[2]} n\'existe pas`)
  process.exit(1)
}

const txt = fs.copyFileSync(process.argv[2], process.argv[3])

