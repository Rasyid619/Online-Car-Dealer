const router = require('express').Router();
const Controller = require('../controllers/controllerCarDealers')
const routerCarDealers = require('./routerCarDealers')
const routerUserProfile = require('./routerUserProfile')



router.get('/', Controller.getHome)


router.get('/login', Controller.getLogin)
router.post('/login', Controller.postLogin)



router.use('/cars', routerCarDealers)
router.use('/users', routerUserProfile)


module.exports = router     