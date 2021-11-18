const router = require ('express').Router()
const controller= require ('../controllers/home')

router.get('/',controller.home) //christin
router.get('/register', controller.addRegister) //christin
router.post('/register',controller.postRegister) //christin
router.get('/login', controller.getLogin) //christin
router.post('/login', controller.postLogin) //christin
router.get('/home') //christin

module.exports = router