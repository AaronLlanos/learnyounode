const fs = require('fs')

fs.readFile(process.argv[2], (err, fileBuffer) => {
  if (err) { throw new Error(err) }
  console.log(fileBuffer.toString().split('\n').length - 1)
})
