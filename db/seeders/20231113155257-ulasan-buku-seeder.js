'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addUlasan = [
      {
        bukuId : 1,
        userId : 1,
        rating : '5',
        komentar : '',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        bukuId : 2,
        userId : 1,
        rating : '4',
        komentar : '',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        bukuId : 1,
        userId : 2,
        rating : '4',
        komentar : '',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]
    await queryInterface.bulkInsert('ulasanBukus', addUlasan, {
      ignoreDuplicates : true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ulasanBukus', null, {});
  }
};
