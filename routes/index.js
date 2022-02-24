const router = require('express').Router();
const Controller = require('../controllers/controllerCarDealers')
const ControllerUser = require('../controllers/controllerUserProfile');
const routerCarDealers = require('./routerCarDealers')
const routerUserProfile = require('./routerUserProfile')



router.get('/', Controller.getHome)
router.get('/register', ControllerUser.getRegisterForm)
router.post('/register', ControllerUser.postRegisterForm)
router.get('/login', Controller.getLogin)
router.post('/login', Controller.postLogin)

router.use((req, res, next) => {
  if(!req.session.userId) {
    const error = `Please Login First!`
    res.redirect(`/login?error=${error}`)

  }
  next()
})

router.use('/cars', routerCarDealers)
router.use('/users', routerUserProfile)


module.exports = router     