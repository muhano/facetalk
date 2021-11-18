'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {foreignKey: 'UserId'}),
      Post.belongsTo(models.Tag, {foreignKey: 'TagId'})
    }
  };
  Post.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: "Post title must not be empty"}
      }
    },
    content: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: "Content must not be empty"}
      }
    },
    imgUrl: {
      type: DataTypes.STRING
    },
    UserId: DataTypes.INTEGER,
    TagId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {msg: "Please select post tag"}
      }
    }
  }, {
    // hooks: {
    //   beforeCreate: (instance, options) => {

    //   }
    // },
    sequelize,
    modelName: 'Post',
  });
  return Post;
};