'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cart.belongsTo(models.shopping_session, {as : 'shopping_sessions', foreignKey : 'sessionId'})
      cart.belongsTo(models.Buku, {as : 'bukus', foreignKey : 'bukuId'})
    }
  }
  cart.init({
    sessionId: DataTypes.INTEGER,
    bukuId: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};