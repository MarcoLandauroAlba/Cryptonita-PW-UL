'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Administrador', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      contraseña: {
        type: Sequelize.TEXT
      },
      correo: {
        type: Sequelize.TEXT
      },
      nombre: {
        type: Sequelize.TEXT
      },
      apellido: {
        type: Sequelize.TEXT
      },
      dni: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Administrador');
  }
};