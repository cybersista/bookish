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
    await queryInterface.bulkInsert('detailUsers',[{
      userId: 1,
      nama: 'Devina',
      alamat: 'Jl.Kecapi No.2',
      kodePos: '2345',
      telepon: '08976543210',
      createdAt: new Date(),
      updatedAt : new Date() 
   }, 
   {
    userId: 2,
    nama: 'Afina',
    alamat: 'Jl.Kecapi No.2',
    kodePos: '2345',
    telepon: '08976543210',
    createdAt: new Date(),
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
    await queryInterface.bulkDelete('detaiUsers', null, {})
  }
  
};
