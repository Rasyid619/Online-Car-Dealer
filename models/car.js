'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.belongsTo(models.Category, {foreignKey: 'CategoryId'})
    }
  }
  Car.init({
    name:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Name is Required`
        },
        notEmpty: {
          args: true,
          msg: `Name is Required`
        }
      }
    },
    description:  {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Description is Required`
        },
        notEmpty: {
          args: true,
          msg: `Description is Required`
        }
      }
    },
    price:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Price is Required`
        },
        min: {
          args: [50000000],
          msg: `Minimum Price is Rp.50.000.000,00`
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Price is Required`
        },
        min: {
          args: [0],
          msg: `Stock Value must be Positive Number`
        }
      }
    },
    condition:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Condition is Required`
        },
        notEmpty: {
          args: true,
          msg: `Condition is Required`
        }
      }
    },
    CategoryId: DataTypes.INTEGER,
    imageUrl:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `ImageUrl is Required`
        },
        notEmpty: {
          args: true,
          msg: `ImageUrl is Required`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};