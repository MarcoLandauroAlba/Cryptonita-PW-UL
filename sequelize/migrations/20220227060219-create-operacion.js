'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Operacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.TEXT
      },
      tipo: {
        type: Sequelize.BOOLEAN
      },
      comprabtc: {
        type: Sequelize.INTEGER
      },
      ventabtc: {
        type: Sequelize.INTEGER
      },
      monto_soles: {
        type: Sequelize.INTEGER
      },
      monto_btc: {
        type: Sequelize.INTEGER
      },
      billetera: {
        type: Sequelize.TEXT
      },
      cuentabanco: {
        type: Sequelize.TEXT
      },
      estado: {
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
    await queryInterface.dropTable('Operacion');
  }
};