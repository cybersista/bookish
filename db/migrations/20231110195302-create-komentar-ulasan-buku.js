'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('komentarUlasanBukus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ulasanBukuId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'ulasanBukus',
          key : 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Users',
          key   : 'id'
        }
      },
      komentar: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('komentarUlasanBukus');
  }
};