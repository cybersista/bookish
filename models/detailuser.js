'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      detailUser.belongsTo(models.User, {as : 'user', foreignKey : 'userId'})
      detailUser.belongsTo(models.userPayment, {as : 'userPayment', foreignKey : 'userPaymentId'})
    }
  }
  detailUser.init({
    userId: DataTypes.INTEGER,
    userPaymentId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kodePos: DataTypes.CHAR,
    telepon: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'detailUser',
  });
  return detailUser;
};