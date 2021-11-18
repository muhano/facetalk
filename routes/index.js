const { landingPage, addRegister, postRegister, getLogin, postLogin, home } = require('../controllers/user')

const router = require ('express').Router()

router.get('/', landingPage) 
router.get('/register', addRegister) 
router.post('/register',postRegister) 
router.get('/login', getLogin) 
router.post('/login', postLogin) 
router.get('/home', home) 

module.exports = router