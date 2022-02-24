const { Profile, User } = require('../models')


class Controller {
  static getUser(req, res) {
    User.findAll({
      include: Profile
    })
      .then(user => {

        res.render('./usersProfile/allUsersersData', {
          user,
          title: 'Data User'
        })
      })
      .catch((err) => {
        res.send(err)
      })
  }

  static getUserById(req, res) {
    let {userId} = req.params

    User.findByPk(userId, {
      include : Profile
    })
    .then(user => {
      // res.send(user)
      res.render('./usersProfile/userData', {title: 'User Data', user})
    })

  }


  static getRegisterForm(req, res) {
    User.findAll()
      .then((user) => {
        res.render('./usersProfile/registerForm', { user, title: 'Add Profile' })
      })
  }

  static postRegisterForm(req, res) {
    let { userName, email, password, confirmPassword, firstName, lastName, phoneNumber, gender, birthDate , role} = req.body
    console.log(req.boy)
    
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
        console.log(err)
        res.send(err)
      })
  }

  static getEditFormProfiles(req,res){
    let {userId, profileId} = req.params 
    User.findByPk(userId, {
      include: Profile,
      where: {id: profileId}
    })
    .then(user => {
      res.render('./usersProfile/profileForm',{user,title: "Edit Profile"})
    })
    .catch((err) => {
      res.send(err)
    })
    
  }


  static postEditProfiles(req,res){
    let { userId ,profileId} = req.params
    console.log(profileId)
    let {firstName, lastName, phoneNumber, gender, birthDate, email} = req.body
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
      // res.send(`berhasil edit`)
      res.redirect(`/users/${userId}`)
    })
    .catch(err => {
      res.send(err)
    })
  }
  
  static deleteAccount(req, res) {
    
    let {userId} = req.params 

    User.destroy({
      where:{
        id : userId
      } 
    })
    .then(() =>{
      res.redirect('/login')
    })
  
}
}

module.exports = Controller