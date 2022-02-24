'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    
    static associate(models) {
      // Profile.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  }
  Profile.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `First Name is Required`
        },
        notEmpty: {
          args: true,
          msg: `First Name is Required`
        }
      }
    },
    lastName:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Last Name is Required`
        },
        notEmpty: {
          args: true,
          msg: `Last Name is Required`
        }
      }
    },
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
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Phone Number is Required`
        },
        notEmpty: {
          args: true,
          msg: `Phone Number is Required`
        }
      }
    },
    gender:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Gender is Required`
        },
        notEmpty: {
          args: true,
          msg: `Gender is Required`
        }
      }
    },
    birthDate:  {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Date is Required`
        },
        notEmpty: {
          args: true,
          msg: `Date is Required`
        }
      }
    },
    UserId:  {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};