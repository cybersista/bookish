'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gudang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gudang.belongsTo(models.Buku, {as : 'bukus', foreignKey : 'bukuId'})
    }
  }
  Gudang.init({
    bukuId: DataTypes.INTEGER,
    stok: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Gudang',
  });
  return Gudang;
};