const Sequelize = require('sequelize')
const db = require('../database')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  }
})

module.exports = User;