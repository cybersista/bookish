'use strict';
<<<<<<< HEAD
/** @type {import('sequelize-cli').Migration} */
=======
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
<<<<<<< HEAD
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      levelUser: {
        type: Sequelize.ENUM,
        values : ['admin','member']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
=======
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      levelUser: {
        type: Sequelize.ENUM('admin', 'member'),
        defaultValue: 'member',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
<<<<<<< HEAD
  }
};
=======
  },
};
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
