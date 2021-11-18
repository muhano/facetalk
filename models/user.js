'use strict';
const {
  Model
} = require('sequelize');

const {hashPassword} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile,{foreignKey: 'UserId'}),
      User.hasMany(models.Post,{foreignKey: 'UserId'})

    }
  };
  User.init({
    username: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : `Username is empty`
        },
        unique: {
          args: true,
          msg: 'Username already in use!'
      }
      } 
    },
    password: {
      type : DataTypes.STRING, 
      validate : {
      notEmpty : {
        msg : `password is empty`
      },
    }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
      notEmpty : {
        msg : `email is empty`
      },
      isEmail : {
        msg : `Input valid email`
      },
    }
    },
  }, {
    sequelize,
    hooks : {
      beforeCreate (instance, option) {
        instance.password = hashPassword(instance.password)
      }
    },
    modelName: 'User',
  });
  return User;
};