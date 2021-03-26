const fs = require('fs')

//index pour prendre le dossier
if (process.argv.length === 3) {
  // check if the path exist
  if (!fs.existsSync(process.argv[2])) {
    console.log(`Désolé, ${process.argv[2]} n\'existe pas`)
    process.exit(1)
  }
  //lire le fichier .txt
  const read = fs.readFileSync(process.argv[2], 'utf-8');

  //Fonction pour recuperer les 10 dernieres lignes du tableau
  let tab = (read.split('\n').slice(-10, -1))

  for (let elem of tab) {
    console.log(elem)
  }
}
//Sinon si Longueur arguments avec option -n
else if (process.argv.length === 5) {
  // check if the path exist
  if (!fs.existsSync(process.argv[4])) {
    console.log(`Désolé, ${process.argv[4]} n\'existe pas`)
    process.exit(1)
  }
  //Check if the optionnal arg is -n
  if (process.argv[2] !== '-n') {
    console.log(`Désolé, ${process.argv[2]} the optionnal arg is -n`)
    process.exit(1)
  }
  //Check if the is a number
  if (isNaN(process.argv[3])) {
    console.log(`Désolé, ${process.argv[3]} is not a number`)
    process.exit(1)
  }
  //Lire le fichier .txt
  const read = fs.readFileSync(process.argv[4], 'utf-8').split('\n')

  // fonction pour recuperer les 10 dernieres lignes
  let tab = (read.slice(read.length - process.argv[3], read.length))

  tab.forEach((elem) => {
    console.log(elem)
  })
} else {
  console.log(`Error: node tailPlus.js -n nb path`)
}