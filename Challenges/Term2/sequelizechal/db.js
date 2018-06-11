const Sequelize = require('sequelize') // capital S because the package default export is a class

const con = new Sequelize(`postgres://admin:admin@localhost:5433/bookmarks`)

con.authenticate().then(() => {
  console.log('Connected!!')
}).catch(err => {
  console.error('Connection failed: ', err)
})

//defines schema

const Bookmark = con.define('bookmark', {
  url: { type: Sequelize.STRING },
  title: { type: Sequelize.STRING }
}) 

// Applies the schema to the DB
// Runs CREATE TABLE IF NOT EXISTS "users"... (force: true overrides if not exists)

Bookmark.sync().then(() => {
  console.log("schema created")

  Bookmark.findOrCreate({where: {url: 'https://github.com'}, defaults: {title: 'GitHub'}})
  Bookmark.findOrCreate({where: {url: 'https://www.google.com/'}, defaults: {title: 'Google'}})

  return;
})


module.exports = Bookmark;