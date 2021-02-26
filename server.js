
//
require('dotenv').config()
const express = require('express')
const expressHandlebars = require('express-handlebars')
const passport = require('passport')
const db = require('./models')
const apiRoutes = require('./controllers/apiRoutes.js')
const htmlRoutes = require('./controllers/htmlRoutes.js')

const PORT = process.env.PORT || 3310
// In `.env` file add `SYNC_DB=true` to drop database tables.
const dbSync = { force: process.env.SYNC_DB || false }
const sequelizeSessionStore = new SessionStore({ db: db.sequelize })
const app = express()

app.engine('handlebars', expressHandlebars({ defaultLayout: 'user' }))

app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

sequelizeSessionStore.sync()

app.use(passport.initialize())
app.use(passport.session())
app.use(apiRoutes)
app.use(htmlRoutes)

db.sequelize
  .sync(dbSync)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`\nServer listening on: http://localhost:${PORT}`)
    )
  })
  .catch(error => {
    console.log(error)
  })
