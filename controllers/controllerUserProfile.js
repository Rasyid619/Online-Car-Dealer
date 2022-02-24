const { Profile, User } = require('../models')


class Controller {
  static getUser(req, res) {
    User.findAll({
      include: Profile
    })
      .then(user => {

        res.render('./users/usersData', {
          user,
          title: 'Data User'
        })
      })
      .catch((err) => {
        res.send(err)
      })
  }

  static getUserProfiles(req, res) {
    let { profileId } = req.params
    Profile.findByPk(profileId)
      .then(profile => {
        res.render('./profiles/profilesData', {
          profile,
          title: 'Data profile'
        })
      })
      .catch((err) => {
        res.send(err)
      })
  }

  static getRegisterForm(req, res) {
    User.findAll()
      .then((user) => {
        res.render('./users/registerForm', { user, title: 'Add Profile' })
      })
  }

  static postRegisterForm(req, res) {
    let { userName, email, password, confirmPassword, firstName, lastName, phoneNumber, gender, birthDate } = req.body

    let newUser = {
      userName,
      email,
      password
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
        res.redirect('/users')
      })
      .catch(err => {
        console.log(err)
        res.send(err)
      })
  }

  static getEditFormProfiles(req,res){
    let {profileId} = req.params 

    Profile.findByPk(profileId)
    .then(profile => {
      res.render('./profiles/profileForm',{profile,title: "Edit Profile"})
    })
    .catch((err) => {
      res.send(err)
    })
    
  }

}

module.exports = Controller