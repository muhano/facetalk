const { addRegister, postRegister, getLogin, postLogin, logout, showMyPost } = require('../controllers/user')

const router = require ('express').Router()

router.get('/register', addRegister) 
router.post('/register',postRegister) 
router.get('/login', getLogin) 
router.post('/login', postLogin) 
router.get('/logout', logout)
router.get('/mypost', showMyPost)


module.exports = router