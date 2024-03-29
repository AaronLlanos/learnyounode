const map = require('through2-map')
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(map(chunk => {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  } else {
    return res.end('send me a POST\n')
  }
})
server.listen(Number(process.argv[2]))
