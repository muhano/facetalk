'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, {foreignKey: 'UserId'})
    }

    get userTitle(){
      if (this.gender === 'male'){
        return 'Mr'
      } else if (this.gender === 'female'){
        return 'Ms'
      }
    }
  };
  Profile.init({
    name: DataTypes.STRING,
    noTelepon: DataTypes.STRING,
    address: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};