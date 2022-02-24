const router = require('express').Router();
const Controller = require('../controllers/controllerCarDealers')
const { isAdmin } = require('../middlewares/auth');


router.get('/', Controller.getCarDealers)

router.get('/categories', Controller.getCarCategories)




module.exports = router