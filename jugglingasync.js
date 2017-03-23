const http = require('http')

let dataStreams = []

const get = (url, index, cb) => {
  let stream = ''
  http.get(url, res => {
    res.setEncoding('utf8')
    res.on('data', data => stream += data)
    res.on('end', data => {
      dataStreams[index] = stream
      cb()
    })
  })
}

for (var i = 2; i < process.argv.length; i++) {
  get(process.argv[i], i - 2, () => {
    if (dataStreams.length === 3) {
      for (var i = 0; i < dataStreams.length; i++) {
        console.log(dataStreams[i])
      }
    }
  })
}
