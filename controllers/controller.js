const{Car, Category, Profile, User } = require('../models')


class Controller{

    static getHome(req,res){
       res.render('index')
    }



}

module.exports = Controller