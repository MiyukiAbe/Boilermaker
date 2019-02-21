const db = require('./database')
const Kitten = require('./models/Kitten')
const Puppy = require('./models/Puppy')
const User = require('./models/User')

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')


module.exports = {
  db,
  Kitten,
  Puppy,
  User
}