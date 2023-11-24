'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userPayment.belongsTo(models.detailUser, {as:'detailUsers',foreignKey : 'detailUserId'})
    }
  }
  userPayment.init({
    detailUserId: DataTypes.INTEGER,
    provider: DataTypes.STRING,
    noPayment: DataTypes.CHAR(25)
  }, {
    sequelize,
    modelName: 'userPayment',
  });
  return userPayment;
};