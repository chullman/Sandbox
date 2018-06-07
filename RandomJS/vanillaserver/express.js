// Express server

const express = require('express')

const app = express()

// don't need to specify content-type in express

app.get('/', (req, res) => {
  res.send('Home page!')
})

app.get('/hello', (req, res) => {
  res.send('<h1>Hello!</h1>')
})

// restful route
app.get('/hello/:name', (req, res) => {
  res.send(`<h2>Hello, ${req.params.name}</h2>`)
})

app.listen(9999, () => {
  console.log('Express is listening on 9999')
})