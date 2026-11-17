'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      Harga: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      Stok: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      Image: {
        type: Sequelize.STRING
      },
      Category_id: {
        type: Sequelize.INTEGER,
        allowNull: true,         
        references: {
          model: 'Categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('Menus');
  }
};