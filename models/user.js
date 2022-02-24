'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      User.belongsTo(models.Profile, {foreignKey: 'ProfileId'})
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
    ProfileId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `First Name is Required`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};