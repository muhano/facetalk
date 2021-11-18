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

app.get('/profile/') //christin
// app.get('/editProfile') //geri//selesai
// app.post('/editProfile') //geri//selesai


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


//search di home //christin
//mvp
//heroku
//static method
//getter method//geri //di profile ada gender//selesai
//logout /christin