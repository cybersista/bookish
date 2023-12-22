'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userPayments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.CHAR
      },
      detailUserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'detailUsers',
          key   : 'id'
        }
      },
      provider: {
        type: Sequelize.STRING
      },
      noPayment: {
        type: Sequelize.CHAR()
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userPayments');
  }
};