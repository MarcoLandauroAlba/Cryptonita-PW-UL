'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Administrador", [
      {
        telefono: '938256661',
        contraseña: '123',
        correo: 'admin@gmail.com',
        nombre: 'Hernan',
        apellido: 'Quintana',
        dni: 74377295,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Administrador', null, {});
  }
};
