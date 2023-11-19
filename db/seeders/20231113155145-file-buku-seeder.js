'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addfileBuku = [
      {
        bukuId : 1,
        urlFile : 'one-piece-vol-97.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ]

    await queryInterface.bulkInsert('fileBukus', addfileBuku, {
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
