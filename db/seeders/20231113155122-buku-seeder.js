'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addBuku = [
      {
        penulisId : 1,
        penerbitId : 1,
        kategoriId : 1,
        judul : 'One Piece 97',
        harga : 32000,
        isbn : 9786230028755,
        tahunTerbit : 2021,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        penulisId : 2,
        penerbitId : 2,
        kategoriId : 1,
        judul : 'Yang Telah Lama Pergi',
        harga : 99000,
        isbn : 9786238829606,
        tahunTerbit : 2023,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ]

    await queryInterface.bulkInsert('Bukus', addBuku, {
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
