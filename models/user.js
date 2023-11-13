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
      User.hasMany(models.detailPesanan, {foreignKey : 'userId', as:'detailPesanans'})
      User.hasMany(models.ulasanBuku, {foreignKey : 'userId', as:'ulasanBukus'})
      User.hasMany(models.komentarUlasanBuku, {foreignKey : 'userId', as:'komentarUlasanBukus'})
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