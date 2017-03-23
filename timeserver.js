const net = require('net')
const strftime = require('strftime');

const server = net.createServer(socket => {
  const time = strftime('%F %H:%M', new Date()) + '\n'
  socket.end(time)
})
server.listen(process.argv[2])
