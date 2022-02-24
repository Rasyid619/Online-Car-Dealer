const{Car, Category } = require('../models')

class Controller{



    static getHome(req,res){
        res.render('index')
     }
 
     static getCarDealers(req,res){
        Car.findAll()
        .then(result =>{
            res.send(result)
        })
        .catch((err) =>{
            res.send(err)
        })
     }

     static getCarCategories(req,res){
        Category.findAll()
        .then(result =>{
            res.send(result)
        })
        .catch((err) =>{
            res.send(err)
        })
     }
}

module.exports = Controller