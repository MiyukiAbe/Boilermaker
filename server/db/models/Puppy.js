const Sequelize = require('sequelize')
const db = require('../database')

const Puppy = db.define('kitten', {
  name: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  }
})

module.exports = Puppy;