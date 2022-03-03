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
    comprabtc: DataTypes.DOUBLE,
    ventabtc: DataTypes.DOUBLE,
    monto_soles: DataTypes.DOUBLE,
    monto_btc: DataTypes.DOUBLE,
    billetera: DataTypes.TEXT,
    cuentabanco: DataTypes.TEXT,
    estado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Operacion',
    freezeTableName:true
  });
  return Operacion;
};