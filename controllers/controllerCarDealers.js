const { Car, Category, User } = require('../models')
const bcrypt = require('bcryptjs');

class Controller {

	static getHome(req, res) {
		res.render('index', { title: 'Home' })
	}

	static getLogin(req, res) {
		const { error } = req.query
		res.render('login', { title: 'Login Page', error})
	}

	static postLogin(req, res) {
		const { userName, password } = req.body
		User.findOne({ 
			where: { userName }
		})
			.then(user => {
				if (user) {
					let isValidPassword = bcrypt.compareSync(password, user.password)
					if (isValidPassword) {
						req.session.userId = user.id
						return res.redirect('/cars')
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

	static getCarDealers(req, res) {
		Car.findAll()
			.then(result => {
				res.send(result)
			})
			.catch((err) => {
				res.send(err)
			})
	}

	static getCarCategories(req, res) {
		Category.findAll()
			.then(result => {
				res.send(result)
			})
			.catch((err) => {
				res.send(err)
			})
	}
}

module.exports = Controller