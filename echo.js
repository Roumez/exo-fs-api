let result = ''
for (let i = 2; i < process.argv.length; i++) {
  result += process.argv[i] + " "
}
if (process.argv.length !== 5) {
  console.log(`Error: change number of elem`)
  process.exit(1)
}

console.log(result)

