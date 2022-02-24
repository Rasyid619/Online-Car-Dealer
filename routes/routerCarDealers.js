const router = require('express').Router();
const Controller = require('../controllers/controllerCarDealers')


router.get('/', Controller.getCarDealers)

router.get('/categories', Controller.getCarCategories)




module.exports = router