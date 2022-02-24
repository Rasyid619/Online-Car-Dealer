const router = require('express').Router();
const Controller = require('../controllers/controllerCarDealers')
const ControllerUser = require('../controllers/controllerUserProfile');
const routerCarDealers = require('./routerCarDealers')
const routerUserProfile = require('./routerUserProfile')
const {isLoggedIn} = require('../middlewares/auth');



router.get('/', Controller.getHome)
router.get('/register', ControllerUser.getRegisterForm)
router.post('/register', ControllerUser.postRegisterForm)
router.get('/login', Controller.getLogin)
router.post('/login', Controller.postLogin)

router.get('/logout', isLoggedIn, Controller.getLogOut)


router.use('/cars', isLoggedIn, routerCarDealers)
router.use('/users', isLoggedIn, routerUserProfile)


module.exports = router     