const {Profile, User} = require('../models')


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
        Profile.findAll()
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
        res.render('./users/registerForm', {
            title: 'Register Form'
        })
    }

    static postRegisterForm(req, res) {
        let { userId } = req.params
        let { userName, email, password, confirmPassword } = req.body
        let newuser = {
            userName,
            email,
            password
        }
        // if(password != confirmPassword) {
        //     res.redirect('/register')
        // }

        if (!userId) {
            return User.create(newuser)
                .then(result => {
                    res.redirect(`/users/register/add/profiles/`)
                })
                .catch((err) => {
                    res.send(err)
                })
        }else{
            res.redirect('/')
        }

    }

    static getAddProfileForm(req, res) {
       User.findAll()
       .then((user)=>{
            res.render('./profiles/profileForm',{user, title: 'Add Profile'})
       })
       .catch((err) => {
        res.send(err)
    })

    }
    static postAddProfileForm(req,res){
      
        const {firstName, lastName, email, phoneNumber, gender, birthDate, userId} = req.body
        const newProfile ={
            firstName,
            lastName,
            email,
            phoneNumber,
            gender,
            birthDate,
            UserId: +userId
        }

        Profile.create(newProfile)
        .then(()=>{
            res.redirect('/users')
        })
        .catch((err) => {
            res.send(err)
        })

    }
}

module.exports = Controller