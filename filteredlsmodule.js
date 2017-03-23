const fs = require('fs');
const path = require('path');

module.exports = function (dirName, fileExt, cb) {
  fs.readdir(dirName, (err, list) => {
    if (err) { return cb(err) }
    if (fileExt) {
      const filteredList = list.filter(fileName => path.extname(fileName) === `.${fileExt}`)
      cb(null, filteredList)
    } else {
      cb(null, list)
    }
  })
}
