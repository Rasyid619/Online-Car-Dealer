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
}

module.exports = Controller