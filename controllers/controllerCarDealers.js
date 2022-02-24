const {
	Car,
	Category,
	User
} = require('../models')
const bcrypt = require('bcryptjs');
const {
	Op
} = require('sequelize')
class Controller {

	static getHome(req, res) {
		res.render('index', {
			title: 'Home'
		})
	}

	static getLogin(req, res) {
		const {
			error
		} = req.query
		res.render('login', {
			title: 'Login Page',
			error
		})
	}

	static postLogin(req, res) {
		const {
			userName,
			password
		} = req.body
		User.findOne({
				where: {
					userName
				}
			})
			.then(user => {
				if (user) {
					let isValidPassword = bcrypt.compareSync(password, user.password)
					if (isValidPassword) {
						req.session.userId = user.id
						req.session.role = user.role
						return res.redirect(`/users/${user.id}`)
					} else {
						const error = `Invalid Username or Password`
						return res.redirect(`/login?error=${error}`)
					}
				} else {
					const error = `Invalid Username or Password`
					return res.redirect(`/login?error=${error}`)
				}
			})
	}

		static getLogOut(req, res) {
			req.session.destroy(err => {
				if(err) {
					res.send(err)
				} else {
					res.redirect('/login')
				}
			})
		}
	}


	static getCarDealers(req, res) {
		Car.findAll({
				include: Category,
				where:{
					stock:{
						[Op.gt]: 0
					},
					
				},
				order: [
					['id', 'asc']
				]
			})
			.then(car => {
				res.render('./carDealers/cards', {
					car,
					title: 'Cars Category'
				})
			})
			.catch((err) => {
				res.send(err)
			})
	}

	static getCarDetails(req, res) {

		let {
			carId
		} = req.params
		Car.findByPk(carId)
			.then(car => {
				res.render('./carDealers/carDetails', {
					car,
					title: 'Cars Details'
				})
			})
			.catch((err) => {
				res.send(err)
			})
	}

	static getAddCarForm(req, res) {
		Category.findAll()
			.then((category) => {
				res.render('./carDealers/addCar', {
					category,
					title: 'Add Car'
				})
			})
			.catch((err) => {
				res.send(err)
			})
	}

	static postAddCarForm(req, res) {
		let {
			name,
			description,
			price,
			stock,
			imageUrl,
			condition,
			CategoryId
		} = req.body
		console.log(req.body);
		let newCar = {
			name,
			description,
			price,
			stock,
			imageUrl,
			condition,
			CategoryId
		}

		Car.create({
				name: name,
				description: description,
				stock: stock,
				imageUrl: imageUrl,
				CategoryId: CategoryId,
				price: price,
				condition: condition
			})
			.then(() => {
				res.redirect('/cars')
			})
			.catch((err) => {
				res.send(err)
			})
	}

	static buyCar(req, res) {
		let {
			carId
		} = req.params
		console.log(req.params);
		Car.findByPk(carId)
			.then(car => {

				return Car.update({
					stock: car.stock - 1
				}, {
					where: {
						id: carId
					}
				})
			})
			.then(() => {
				res.redirect('/cars')
			})
			.catch((err) => {
				res.send(err)
			})
	}

	static getEmptyCars(req, res) {

		Car.findAll({
				include: Category,
				order: [
					['id', 'asc']
				],
				where: {
					stock: {
						[Op.lte]: 0
					}
				}
			})
			.then(car => {
				res.render('./carDealers/emptyCar', {
					car,
					title: 'Empty Car'
				})
			})
			.catch((err) => {
				res.send(err)
			})
	}

	static restockCar(req, res) {
		const {carId} = req.params
		Car.findByPk(carId)
			.then(car => {

				return Car.update({
					stock: car.stock + 1
				}, {
					where: {
						id: carId
					}
				})
			})
			.then(() => {
				res.redirect('/cars')
			})
			.catch((err) => {
				res.send(err)
			})
	}
}

module.exports = Controller