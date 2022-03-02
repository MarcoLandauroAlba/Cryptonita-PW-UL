'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Operacion.belongsTo(models.Cliente, {
        foreignKey : {
          name : "id_cliente"
        }
      })
    }
  }
  Operacion.init({
    id_cliente : DataTypes.INTEGER,
    tipo: DataTypes.BOOLEAN,
    comprabtc: DataTypes.INTEGER,
    ventabtc: DataTypes.INTEGER,
    monto_soles: DataTypes.INTEGER,
    monto_btc: DataTypes.INTEGER,
    billetera: DataTypes.TEXT,
    cuentabanco: DataTypes.TEXT,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Operacion',
    freezeTableName:true
  });
  return Operacion;
};