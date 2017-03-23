const http = require('http')

let totalStream = ''
http.get(process.argv[2], res => {
  res.setEncoding('utf8')
  res.on('data', data => totalStream += data)
  res.on('end', data => {
    console.log(totalStream.length)
    console.log(totalStream)
  })
})
