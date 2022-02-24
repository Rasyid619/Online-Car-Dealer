'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    
    static associate(models) {
      Profile.belongsTo(models.User, {foreignKey: 'UserId'})
    }

    get fullName (){
      return `${this.firstName} ${this.lastName}`
    }

    get formatedDate() {
      let year = this.birthDate.getFullYear()
      let month;
      let date;
      if (this.birthDate.getMonth()+1 < 10) {
          month = `0${this.birthDate.getMonth()+1}`   
      } else {
          month = this.birthDate.getMonth()+1
      }
      if (this.birthDate.getDate() < 10) {
          date = `0${this.birthDate.getDate()}`   
      } else {
          date = this.birthDate.getDate()
      }
      return `${year}-${month}-${date}`
  }
  
  }

  let yearbefore = new Date().getFullYear() - 17

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
        },
        len:{
          args:[9,12],
          msg: "Phone Number must at least have 9 characters and max 12 characters"
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
        },
        isBefore:{
          args:`${yearbefore}`,
          msg:"Must at least 17 years old"
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