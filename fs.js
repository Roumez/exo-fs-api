const fs = require('fs')
let lsRep = fs.readdirSync(process.argv[2])

for (let elem of lsRep) {
  console.log(elem)
}