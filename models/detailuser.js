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
      detailUser.belongsTo(models.User, {as : 'users', foreignKey : 'userId'})
      
      detailUser.hasMany(models.userPayment, {foreignKey : 'detailUserId', as : 'userPayments'})
    }
  }
  detailUser.init({
    userId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kodePos: DataTypes.CHAR(5),
    telepon: DataTypes.CHAR(12)
  }, {
    sequelize,
    modelName: 'detailUser',
  });
  return detailUser;
<<<<<<< HEAD
};
=======
};
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
