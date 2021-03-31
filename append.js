const fs = require('fs')


if (process.argv.length < 3) {
  console.log(`Le nombre d’arguments`)
  process.exit(1)
}
process.argv.slice(2, -1).forEach((el) => {
  if (!fs.existsSync(el)) {
    console.log(`warning: ${el} n’existe pas`);
    process.exit(1)
  }
})
process.argv.slice(2).forEach((el) => {
  const stats = fs.statSync(el);
  if (!stats.isFile()) {
    console.log(`warning: ${el} pas un fichier.`)
    process.exit(1)
  }
})

let text = ``
//lire les arguments en ligne de commande
for (let i = 2; i < process.argv.length - 1; ++i) {
  text += fs.readFileSync(process.argv[i])
}
let lastDoc = process.argv[process.argv.length - 1]
fs.writeFileSync(lastDoc, text)