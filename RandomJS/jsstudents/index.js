const Sequelize = require('sequelize') // capital S because the package default export is a class

const con = new Sequelize(`postgres://admin:admin@localhost:5433/students`)

con.authenticate().then(() => {
  console.log('Connected!!')
}).catch(err => {
  console.error('Connection failed: ', err)
})

//defines schema

const User = con.define('user', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING }
}) 

// Applies the schema to the DB
// Runs CREATE TABLE IF NOT EXISTS "users"... (force: true overrides if not exists)

User.sync({ force: true }).then(() => {
  console.log("schema created")
  User.create({
    firstName: 'John',
    lastName: 'Smith'
  })
  return;
}).then(() => {
  User.findAll().then(users => {

    console.log(users);
    /*
    for (user of users) {
      console.log(user.dataValues.firstName)
    }
    */
  })
  console.log("now outputting results")
})