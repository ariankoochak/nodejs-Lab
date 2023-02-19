const http = require('http')
const url = require('url')
const processing = require('./process')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  const urlParsed = url.parse(req.url)
  const exp = processing(urlParsed)
  res.end(exp)
})

server.listen(port, hostname, () => {
  console.log('server balaaaa')
})
