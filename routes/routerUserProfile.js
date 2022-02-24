const router = require('express').Router();
const Controller = require('../controllers/controllerUserProfile')

router.get('/', Controller.getUser)
router.get('/register', Controller.getRegisterForm)
router.post('/register', Controller.postRegisterForm)
router.get('/register/add/profiles', Controller.getAddProfileForm)
router.post('/register/add/profiles', Controller.postAddProfileForm)
router.get('/profiles/:profileId', Controller.getUserProfiles)
module.exports = router