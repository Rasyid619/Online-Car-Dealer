'use strict';

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
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (newUser => {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(newUser.password, salt);
        newUser.password = hash
      })
        
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};