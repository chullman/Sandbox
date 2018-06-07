// Node server - (no express)

const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {

  res.writeHead(200, {
    'Content-Type': 'text/html'
  })

  if (req.url === '/hello') {
    if (req.method === 'GET') {
      res.write('Hello from our server!')
    } else if (req.method === 'POST') {
      res.write('You posted!')
    }
    
  }
  
  res.write('<h1>Goodbye!</h1>')

  //end the response and send it
  res.end()

})

server.listen(9999)

console.log("server listening on 9999");