const http = require('http')
const url = require('url')
const processing = require('./process')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  const urlParsed = url.parse(req.url)
  const exp = processing(urlParsed)
  if (exp.length > 15) { res.statusCode = 401 }
  res.end(exp)
})

server.listen(port, hostname, () => {
  console.log('server running...')
})
