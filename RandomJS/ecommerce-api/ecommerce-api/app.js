// npm install graphql apollo-server-express graphql-tools body-parser
// apollo server GraphQL server for express - middleware in the express server
// alternative to REST

const express = require('express')
const bodyParser = require('body-parser')

const { Order, Product, Image } = require('./db')

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')

const app = express()

app.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }))

// Schema for GraphQL:n
const typeDefs = `
  type Query { orders: [Order] }
  type Order { email: String, currency: String, products: [Product] }
  type Product { title: String, price: Int, images: [Image] }
  type Image { url: String }
`

const resolvers = {
  Query: {
    orders: async () => await Order.all() // ES6 uses async await as cleaner to promises
  },
  Order: {
    products: async (order) => await order.getProducts() // getProducts is a sequalise helper
  },
  Product: {
    images: async (product) => await product.getImages()
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

// OLD REST way - without graphql
app.get('/api/orders', async (req, res) => res.send(await Order.all()))
app.get('/api/orders/:id', async (req, res) => res.send(await Order.findById(req.params.id)))

app.get('/api/products', async (req, res) => res.send(await Product.all()))
app.get('/api/products/:id', async (req, res) => res.send(await Product.findById(req.params.id)))

app.get('/api/images', async (req, res) => res.send(await Image.all()))
app.get('/api/images/:id', async (req, res) => res.send(await Image.findById(req.params.id)))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))
