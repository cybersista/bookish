'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
<<<<<<< HEAD
=======
const process = require('process');
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
<<<<<<< HEAD
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
=======
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

<<<<<<< HEAD
module.exports = db;
=======
module.exports = db;
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
