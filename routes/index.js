const router = require('express').Router();
const Controller = require('../controllers/controller')
const routerCarDealers = require('./routerCarDealers')
const routerUserProfile = require('./routerUserProfile')



router.get('/', Controller.getHome)
router.get('/carDealers', routerCarDealers)
router.get('/user', routerUserProfile)


module.exports = router     