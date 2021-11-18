const { editProfileForm, postEditProfile, getProfile } = require('../controllers/profile')

const router = require('express').Router()

router.get('/',getProfile)
router.get('/edit', editProfileForm)
router.post('/edit',postEditProfile)


module.exports = router