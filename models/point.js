// models/point.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    static associate(models) {
      Point.belongsTo(models.User, { foreignKey: 'userId', as: 'userPoints' });
      Point.belongsTo(models.Event, { foreignKey: 'eventId', as: 'eventPoints' });
    }
  }
  Point.init(
    {
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Point',
    }
  );
  return Point;
};
