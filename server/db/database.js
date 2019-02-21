const Sequelize = require('sequelize')
// const pkg = require('../../package.json')
// create the database instance that can be used in other database files
const db = new Sequelize(`postgres://localhost:5432/boilermaker`, {
  logging: false // so we don't see all the SQL queries getting made
})

// const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432:yourdbname', {
//   logging: false // unless you like the logs
//   // ...and there are many other options you may want to play with
// });


module.exports = db
