'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addPenerbit = [
      {
        nama : 'Elex Media Komputindo',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]
    await queryInterface.bulkInsert('Penerbits', addPenerbit, {
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
