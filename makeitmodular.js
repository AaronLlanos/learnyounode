const filteredlsmodule = require('./filteredlsmodule');

filteredlsmodule(process.argv[2], process.argv[3], (err, list) => {
  if (err) { return console.error(err) }
  for (var i = 0; i < list.length; i++) {
    console.log(list[i])
  }
})
