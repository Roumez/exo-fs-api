const fs = require('fs')

let test = fs.statSync('./poem.txt')
console.log(test.size)
console.log(test.isDirectory())
console.log(test.isFile())

