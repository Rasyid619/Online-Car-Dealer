'use strict';
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      User.hasOne(models.Profile, {foreignKey: 'UserId'})
    }
  }
  User.init({
    email:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Email is Required`
        },
        notEmpty: {
          args: true,
          msg: `Email is Required`
        }
      }
    },
    password:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Password is Required`
        },
        notEmpty: {
          args: true,
          msg: `Password is Required`
        },
        len:{
          args:[8,20],
          msg: "Password must at least have 8 characters and max 20 characters"
        }
      }
    },
    userName:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Username is Required`
        },
        len:{
          args:[5,10],
          msg: "Username must at least have 5 characters and max 10 characters"
        }
      }
    },
    role: {
      type: DataTypes.STRING
    },
  }, {
    hooks: {
      beforeCreate: (newUser => {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(newUser.password, salt);
        newUser.password = hash
      }),
      afterCreate: (newUser =>{
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth:{
            user:"tokomobilidaman@gmail.com",
            pass:"@ayobelimobil"
          }
        })
        
        let mailOptions = {
          from: "tokomobilidaman@gmail.com",
          to: `${newUser.email}`,
          subject: "Registration successfull",
          text: 
          `Thanks for joining Beli Mobil!, ${newUser.userName}.`
          
        }
        
        transporter.sendMail(mailOptions, function(err,succes){
          if(err){
            console.log(err);
          } else{
            console.log("Email is sent");
          }
        })
      })
     
        
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};