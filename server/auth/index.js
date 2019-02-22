const router = require('express').Router();
const { User } = require('../db')

module.exports = router


//This is Local Login. Which means user decided to save login password and email with my app.
//So, I need to get user's input info (email/password), then, I need to find if this users exist in the system or not

// /auth/login
//post send you a body.
router.post('/login', async(req, res, next) => {
  try {
    console.log('im inside auth,', req.body)
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and /or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and /or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
  
})

//User creating an account 
router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err){
    if (err.name === "SequelizeUniqueConstrainError") {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

//Logout
router.delete('/logout', (req,res) => {
  req.logout()
  req.session.destory()
  res.redirest('/')
})

//Get me
router.get('/me', (req, res) => {
  res.json(req.user)
})