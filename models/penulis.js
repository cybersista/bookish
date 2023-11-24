'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penulis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
<<<<<<< HEAD
      Penulis.hasMany(models.Buku, {foreignKey : 'penulisId', as:'bukus'})
=======
      Penerbit.hasMany(models.Buku, {foreignKey : 'penulisId', as:'bukus'})
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
    }
  }
  Penulis.init({
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Penulis',
  });
  return Penulis;
};