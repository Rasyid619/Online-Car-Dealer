const router = require('express').Router();
const Controller = require('../controllers/controllerUserProfile')

router.get('/', Controller.getUser)

router.get('/profiles/:profileId', Controller.getUserProfiles)

module.exports = router