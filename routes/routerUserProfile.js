const router = require('express').Router();
const Controller = require('../controllers/controllerUserProfile')

router.get('/', Controller.getUser)
router.get('/register', Controller.getRegisterForm)
router.post('/register', Controller.postRegisterForm)
router.get('/profiles/:profileId', Controller.getUserProfiles)
router.get('/profiles/:profileId/edit', Controller.getEditFormProfiles)
module.exports = router