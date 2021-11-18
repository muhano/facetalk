const router = require ('express').Router()
const Controller = require('../controllers/post')


router.get('/addpost', Controller.addPostForm) //geri
router.post('/addpost', Controller.addPost) //geri
router.get('/editpost/:postId', Controller.editPostForm) //geri
router.post('/editpost/:postId', Controller.editPost) //geri
router.get('/deletepost/:postId', Controller.deletePost ) //geri

module.exports = router