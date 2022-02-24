const{Car, Category } = require('../models')

class Controller{



    static getHome(req,res){
        res.render('index',{title: 'Home'})
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
        Car.findAll({
            include: Category
        })
        .then(car =>{
            res.render('./carDealers/cards', {car})
        })
        .catch((err) =>{
            res.send(err)
        })
     }
}

module.exports = Controller