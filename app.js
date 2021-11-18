const express = require('express')
const app = express()
const port = 3000
const Controller = require('./controllers/controller')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) =>{
  res.send('home')
}) //christin
app.get('/register') //christin
app.post('/register') //christin
app.get('/login') //christin
app.post('/login') //christin
app.get('/home') //christin

app.get('/addpost', Controller.addPostForm) //geri
app.post('/addpost', Controller.addPost) //geri
app.get('/editpost/:postId', Controller.editPostForm) //geri
app.post('/editpost/:postId', Controller.editPost) //geri
app.get('/deletepost/:postId', Controller.deletePost ) //geri

app.get('/profile/:id')
app.get('/editProfile') 
app.post('/editProfile')
// app.get('/addTags')
// app.post('/addTags')
// app.get('/deleteTags')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})