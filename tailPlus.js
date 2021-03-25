const fs = require('fs')



// check if the path exist
if (!fs.existsSync(process.argv[2])) {
  console.log(`Désolé, ${process.argv[2]} n\'existe pas`)
  process.exit(1)
}
// Longueur de nos arguments
if (process.argv.length === 3) {
  const read = fs.readFileSync(process.argv[2], 'utf-8');

  let tab = (read.split('\n').slice(-10))

  for (let elem of tab) {
    console.log(elem)
  }
} else if{

}



