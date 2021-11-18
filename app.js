const express = require('express')
const app = express()
const port = 3000
const Controller = require('./controllers/post')
const router = require ("./routes/index")
const session = require('express-session')


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: 'session-coder',
    resave: false,
    saveUninitialized: true,

  })
)

app.use('/', router) //christin



app.get('/profile/:id')
app.get('/editProfile') 
app.post('/editProfile')
// app.get('/addTags')
// app.post('/addTags')
// app.get('/deleteTags')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})