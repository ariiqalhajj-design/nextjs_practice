"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          nama: "snak",
          deskripsi: "makanan ringan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "minuman",
          deskripsi: "minuman segar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "makanan berat",
          deskripsi: "makanan berat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
