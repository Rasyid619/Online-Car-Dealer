const router = require('express').Router();
const Controller = require('../controllers/controllerUserProfile')

router.get('/', Controller.getUser)
router.get('/:userId', Controller.getUserById)
router.get('/:userId/profiles/:profileId/edit', Controller.getEditFormProfiles)
router.post('/:userId/profiles/:profileId/edit', Controller.postEditProfiles)
router.get('/:userId/delete', Controller.deleteAccount)
module.exports = router