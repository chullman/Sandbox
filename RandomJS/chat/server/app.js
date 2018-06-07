const app = require('http').createServer()
const io = require('socket.io')(app)

app.listen(8080, () => console.log('Listening on port 8080'))


io.on('connect', (client) => {
  console.log('Someone connected!')
  io.emit('user-connected', 'A new user has connected')

  client.on('message', (data) => {
    io.emit('new-message', data)
  })

  client.on('typing', (data) => {
    io.emit('is-typing', data)
  })

  client.on('disconnect', () => {
    console.log('Someone disconnected!')
    io.emit('user-disconnected', 'A user has disconnected')
  })

})



// setInterval(() => {
//   io.emit('message', {message: 'hello', time: new Date })
// }, 5000)

