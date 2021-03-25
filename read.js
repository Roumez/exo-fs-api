const fs = require(`fs`)

const read = fs.readFileSync('test.txt', 'utf-8')
console.log(read)

const write = fs.writeFileSync('test.txt', 'Hello world')

