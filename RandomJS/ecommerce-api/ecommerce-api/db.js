const Sequelize = require('sequelize')
const sequelize = new Sequelize('graphql', 'postgres', 'meh123877', {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres',
  operatorsAliases: false
});

const Order = sequelize.define('order', {
  email: Sequelize.STRING,
  currency: Sequelize.STRING,
})

const Product = sequelize.define('product', {
  title: Sequelize.STRING,
  price: Sequelize.INTEGER
})

const Image = sequelize.define('image', {
  url: Sequelize.STRING
})

Order.hasMany(Product)
Product.hasMany(Image)

sequelize.sync()

module.exports = { Order, Product, Image }
