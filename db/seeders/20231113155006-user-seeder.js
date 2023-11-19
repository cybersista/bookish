'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addUser = [
      {
        email : 'test@example.com',
        password : 'admin',
        levelUser : 'admin',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]
    await queryInterface.bulkInsert('Users', addUser, {
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
