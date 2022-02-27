'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cliente.hasMany(models.Operacion)
    }
  }
  Cliente.init({
    estado: DataTypes.BOOLEAN,
    telefono: DataTypes.INTEGER,
    contraseña: DataTypes.TEXT,
    correo: DataTypes.TEXT,
    nombre: DataTypes.TEXT,
    apellido: DataTypes.TEXT,
    dni: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cliente',
    freezeTableName:true
  });
  return Cliente;
};