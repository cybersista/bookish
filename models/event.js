// models/event.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsToMany(models.Buku, {
        through: 'EventBooks',
        foreignKey: 'eventId',
      });
      Event.hasMany(models.Point, { foreignKey: 'eventId', as: 'eventPoints' });
    }
  }
  Event.init(
    {
      name: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Event',
    }
  );
  return Event;
};
