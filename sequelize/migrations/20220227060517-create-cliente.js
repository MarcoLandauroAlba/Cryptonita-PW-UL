'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cliente', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.BOOLEAN
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
    //Creamos nueva columna en tabla Operacion (id_cliente)
    await queryInterface.addColumn("Operacion", "id_cliente", {
      type : Sequelize.INTEGER,
      allowNull : true
    })

    // Agregar el constraint Foreign Key
    await queryInterface.addConstraint("Operacion", {
      type: "FOREIGN KEY",
      fields : ["id_cliente"],
      references : {
        table : "Cliente",
        field : "id"
      },
      name : "FK_OPERACION_CLIENTE"
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Operacion", "FK_OPERACION_CLIENTE")
    await queryInterface.removeColumn("Operacion", "id_cliente")
    await queryInterface.dropTable('Cliente');
  }
};