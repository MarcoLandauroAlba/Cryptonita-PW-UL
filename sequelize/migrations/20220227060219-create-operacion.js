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
      tipo: {
        type: Sequelize.BOOLEAN
      },
      comprabtc: {
        type: Sequelize.DOUBLE
      },
      ventabtc: {
        type: Sequelize.DOUBLE
      },
      monto_soles: {
        type: Sequelize.DOUBLE
      },
      monto_btc: {
        type: Sequelize.DOUBLE
      },
      billetera: {
        type: Sequelize.TEXT
      },
      cuentabanco: {
        type: Sequelize.TEXT
      },
      estado: {
        type: Sequelize.BOOLEAN
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