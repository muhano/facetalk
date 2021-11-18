const { landingPage, addRegister, postRegister, getLogin, postLogin, home, logout } = require('../controllers/user')
const post = require('./postRoute')
const router = require ('express').Router()

router.use('/post', post)

router.get('/', landingPage) 
router.get('/register', addRegister) 
router.post('/register',postRegister) 
router.get('/login', getLogin) 
router.post('/login', postLogin) 
router.get('/home', home) 
router.get('/logout', logout) 


module.exports = router