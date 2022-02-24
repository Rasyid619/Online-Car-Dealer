const{Profile, User } = require('../models')


class Controller{


    static getUser(req,res){
        User.findAll()
          .then(result =>{
              res.send(result)
          })
          .catch((err) =>{
              res.send(err)
          })
    }

    static getUserProfiles(req,res){
        Profile.findAll()
          .then(result =>{
              res.send(result)
          })
          .catch((err) =>{
              res.send(err)
          })
    }

    static getRegisterForm(req,res){
        res.render('./users/registerForm',{title: 'Register Form'})
    }

    static postRegisterForm(req,res){
        let {userName, email, password} = req.body
        let newuser = {
            userName,
            email,
            password
        }

        User.create(newuser)
        .then(result =>{
            res.redirect('/')
        })
        .catch((err) =>{
            res.send(err)
        })
    }
}

module.exports = Controller