const { addRegister, postRegister, getLogin, postLogin, logout } = require('../controllers/user')

const router = require ('express').Router()

router.get('/register', addRegister) 
router.post('/register',postRegister) 
router.get('/login', getLogin) 
router.post('/login', postLogin) 
router.get('/logout', logout) 

module.exports = router