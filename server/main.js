const PORT = process.env.PORT || 3000;
const app = require('./index')
const { db } = require('./db')

//Listen to the Server!!
db.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`
        Listening on port ${PORT}
        http://localhost:${PORT}/
    `))
  })
  
