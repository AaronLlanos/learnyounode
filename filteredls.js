const fs = require('fs');
const path = require('path');
const filePath = process.argv[2]
const filter = process.argv[3]

const printList = list => {
  for (var i = 0; i < list.length; i++) {
    console.log(list[i])
  }
}

fs.readdir(filePath, (err, list) => {
  if (err) { throw new Error(err) }
  if (filter) {
    printList(list.filter(fileName => path.extname(fileName) === `.${filter}`))
  } else {
    printList(list)
  }
})
