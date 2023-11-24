'use strict';
<<<<<<< HEAD
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
=======
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
    static associate(models) {
      User.hasMany(models.detailUser, {foreignKey : 'userId', as:'detailUsers'})
      User.hasMany(models.detailPesanan, {foreignKey : 'userId', as:'detailPesanans'})
      User.hasMany(models.ulasanBuku, {foreignKey : 'userId', as:'ulasanBukus'})
      User.hasMany(models.komentarUlasanBuku, {foreignKey : 'userId', as:'komentarUlasanBukus'})
<<<<<<< HEAD
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
=======
      User.hasMany(models.shopping_session, {foreignKey : 'userId', as:'shopping_sessions'})
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      levelUser: {
        type: DataTypes.ENUM('admin', 'member'),
        defaultValue: 'member',
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
