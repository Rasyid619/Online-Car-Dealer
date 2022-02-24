const router = require('express').Router();
const Controller = require('../controllers/controllerCarDealers')
const { isAdmin } = require('../middlewares/auth');


router.get('/', Controller.getCarDealers)


router.get('/add', Controller.getAddCarForm)
router.post('/add', Controller.postAddCarForm)
router.get('/empty', Controller.getEmptyCars)
router.get('/categories', Controller.getCarCategories)

router.get('/categories/:carId',Controller.getCarDetails)

router.get('/categories/:carId/buy', Controller.buyCar)

router.get('/empty/:carId/restock', Controller.restockCar)

module.exports = router