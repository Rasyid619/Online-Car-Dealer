const router = require('express').Router();
const Controller = require('../controllers/controllerCarDealers')
const { isAdmin, isLoggedIn } = require('../middlewares/auth');


router.get('/', Controller.getCarDealers)


router.get('/add',  isAdmin,  Controller.getAddCarForm)
router.post('/add', Controller.postAddCarForm)
router.get('/empty',  Controller.getEmptyCars)

router.get('/categories/:carId',Controller.getCarDetails)

router.get('/categories/:carId/buy', Controller.buyCar)

router.get('/empty/:carId/restock',  isAdmin,  Controller.restockCar)

module.exports = router