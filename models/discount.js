
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    static associate(models) {
      Discount.belongsTo(models.User, { foreignKey: 'userId', as: 'discountUser' });
      Discount.belongsTo(models.Event, { foreignKey: 'eventId', as: 'discountEvent' });
    }
  }
  Discount.init(
    {
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER, 
    },
    {
      sequelize,
      modelName: 'Discount',
    }
  );
  return Discount;
};
