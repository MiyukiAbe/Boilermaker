const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const session = require('express-session')
const { db } = require('./db')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const dbStore = new SequelizeStore({db: db})
const passport = require('passport')
// const bodyParser = require('body-parser')

// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.
// if (process.env.NODE_ENV === 'test') {
//   after('close the session store', () => dbStore.stopExpiringSessions())
// }

/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */
// if (process.env.NODE_ENV !== 'production') require('../secrets')

// passport registration
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    // const user = await User.findById(id)
    const user = await db.models.user.findById(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

//This is creating a store in Postgres for session.
dbStore.sync();

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session middleware with passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'my best friend is Kochi, the cutest dog ever',
    store: dbStore,
    resave: false,
    saveUninitialized: false
  })
)
app.use(passport.initialize())
app.use(passport.session())

// //Auth routes
app.use('/auth', require('./auth'));

// 'API' routes
app.use('/api', require('./api'));



// static middleware
app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', 'public')));


// send index.html
app.get('*', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);

// 404 middleware
app.use((req, res, next) =>
  path.extname(req.path).length > 0 ? res.status(404).send('Not found') : next()
);

// handle sockets
// require('./socket')(io);

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.')
  }
);



module.exports = app;