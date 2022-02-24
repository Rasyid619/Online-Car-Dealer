const router = require('express').Router();
const Controller = require('../controllers/controllerUserProfile')

router.get('/', Controller.getUser)
router.get('/profiles', Controller.getUserProfiles)
router.get('/register', Controller.getRegisterForm)
router.post('/register', Controller.postRegisterForm)
module.exports = router