const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true)
  const date = new Date(query.iso)
  if (req.method === 'GET') {
    if (pathname === '/api/parsetime') {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      }))
    }
    if (pathname === '/api/unixtime') {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify({ unixtime: date.getTime() }))
    }
  }
})
server.listen(process.argv[2])
