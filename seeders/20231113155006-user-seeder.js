'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      email : 'devinakaramoy@gmail.com',
      password : 'rahasia',
      levelUser : 'member',
      createdAt : new Date(),
      updatedAt : new Date()
    },
   {
     email : 'afinahana@gmail.com',
     password : 'adadeh',
     levelUser : 'member',
     createdAt : new Date(),
      updatedAt : new Date()
   }])
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
