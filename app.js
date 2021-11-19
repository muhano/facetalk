const express = require('express')
const app = express()
const port = process.env.PORT || 3000
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

app.use('/', router) 

app.get('/profile/') 



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



//mvp
//heroku



//tambah tombol buat post di navbar user.ejs
//bikin post user dari situ ada tombol delete dan edit