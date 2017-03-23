const fs = require('fs')
const filePath = process.argv[2]
const file = fs.readFileSync(filePath).toString()
const fileLines = file.split('\n')

console.log(fileLines.length - 1)
