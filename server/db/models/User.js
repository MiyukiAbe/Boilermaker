const Sequelize = require('sequelize')
const db = require('../database')
const crypto = require('crypto')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
})

// instance methods
//When user tries to log in, we will take candidatePassword which is user's passsword and
//put it into encryptPassword and apply the same salt and see if it will generate the same
//hashpassword or not. and Compare.
User.prototype.correctPassword = function (candidatePassword) {
  return User.encryptPassword(candidatePassword, this.salt()) === this.password()
};

// class methods
User.generateSalt = function () {
  // this should generate our random salt
  return crypto.randomBytes(16).toString('base64')
};

User.encryptPassword = function (plainText, salt) {
  // accepts a plain text password and a salt, and returns its hash
  return crypto
  .createHash('RSA-SHA256')
  .update(plainText)
  .update(salt)
  .digest('hex')
};

function setSaltAndPassword (user) {
  // we need to salt and hash again when the user enters their password for the first time
  // and do it again whenever they change it
  // user.change is Sequelize method.Checking if any change has happend on password or not.
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

module.exports = User;