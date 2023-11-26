'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addPenulis = [
      {
        nama : 'Eiichiro Oda',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama : 'Tere Liye',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]
    await queryInterface.bulkInsert('Penulis', addPenulis, {
      ignoreDuplicates : true
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
