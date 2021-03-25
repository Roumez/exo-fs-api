/*on recuper argv[2]
fs.readdirSync(path, 'utf-8')
recupere le tableau, on boucle avec for e
console.log des Element*/

const fs = require('fs')

let dir = fs.readdirSync(process.argv[2], 'utf-8')

for (let elem of process.argv[2]) {
  console.log(dir(elem))
}