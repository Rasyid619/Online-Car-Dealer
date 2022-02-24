const { Profile, User } = require('../models')


class Controller {
  static getUser(req, res) {
    User.findAll({
      include: Profile
    })
      .then(user => {


        res.render('./usersProfile/allUsersData', {

          user,
          title: 'Data User'
        })
      })
      .catch((err) => {
        res.send(err)
      })
  }

  static getUserById(req, res) {
    let { userId } = req.params

    User.findByPk(userId, {
      include: Profile
    })
      .then(user => {
        res.render('./usersProfile/userData', { title: 'User Data', user })
      })

  }


  static getRegisterForm(req, res) {
    const { error } = req.query
    User.findAll()
      .then((user) => {
        res.render('./usersProfile/registerForm', { user, error, title: 'Add Profile' })
      })
  }

  static postRegisterForm(req, res) {
    let { userName, email, password, confirmPassword, firstName, lastName, phoneNumber, gender, birthDate, role } = req.body


    if (password !== confirmPassword) {
      let error = `Password and confirm password does not match`
      res.redirect(`/register?error=${error}`)
    } else {
      let newUser = {
        userName,
        email,
        password,
        role
      }
      User.create(newUser)
        .then((user) => {
          let newProfile = {
            firstName,
            lastName,
            phoneNumber,
            gender,
            birthDate,
            email,
            UserId: user.id
          }
          return Profile.create(newProfile)
        })
        .then(() => {
          res.redirect('/login')
        })
        .catch(err => {
          if (err.name === "SequelizeValidationError") {
            let error = err.errors.map(el => el.message)
            res.redirect(`/register?error=${error}`)
          } else {
            res.send(err)
          }
        })
    }
  }

  static getEditFormProfiles(req, res) {
    let { userId, profileId } = req.params
    let {error} = req.query
    User.findByPk(userId, {
      include: Profile,
      where: { id: profileId }
    })
      .then(user => {
        res.render('./usersProfile/profileForm', { user,error, title: "Edit Profile" })
      })
      .catch((err) => {
        res.send(err)
      })
  }


  static postEditProfiles(req, res) {
    let { userId, profileId } = req.params
    console.log(profileId)
    let { firstName, lastName, phoneNumber, gender, birthDate, email } = req.body
    let newProfile = {
      firstName,
      lastName,
      phoneNumber,
      gender,
      birthDate,
      email
    }

    Profile.update(newProfile, {
      where: {
        id: profileId
      }
    })
      .then(() => {
        res.redirect(`/users/${userId}`)
      })
      .catch(err => {
        if (err.name === "SequelizeValidationError") {
          let error = err.errors.map(el => el.message)
          res.redirect(`/${userId}/profiles/${profileId}/edit/?error=${error}`)
        } else {
          res.send(err)
        }
      })
  }

  static deleteAccount(req, res) {

    let { userId } = req.params

    User.destroy({
      where: {
        id: userId
      }
    })
      .then(() => {
        res.redirect('/login')
      })
  }
}

module.exports = Controller