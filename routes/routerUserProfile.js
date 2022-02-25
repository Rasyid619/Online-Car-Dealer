const router = require('express').Router();
const Controller = require('../controllers/controllerUserProfile')
const { isAdmin, isLoggedIn } = require('../middlewares/auth');

router.get('/', isAdmin, Controller.getUser)
router.get('/:userId', Controller.getUserById)
router.get('/:userId/profiles/:profileId/edit', isLoggedIn , Controller.getEditFormProfiles)
router.post('/:userId/profiles/:profileId/edit', Controller.postEditProfiles)
router.get('/:userId/delete', Controller.deleteAccount)
module.exports = router