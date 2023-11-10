'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.detailUser, {foreignKey : 'userId', as:'detailUsers'})
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    levelUser: DataTypes.ENUM('admin','member')
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};