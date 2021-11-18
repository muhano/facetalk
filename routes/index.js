const { landingPage, home } = require('../controllers/user')
const authentication = require('../middlewares/authentication')
const post = require('./postRoute')
const router = require ('express').Router()
const user = require('./user')


router.get('/', landingPage) 
router.use('/',user)
router.use(authentication)
router.get('/home', home) 
router.use('/post', post)

module.exports = router