const db = require("../sequelize/models")

const guardarOperacion = async (idcliente,fecha,tipo,comprabtc,ventabtc,montosoles,montobtc,billetera,cuentabcp) => {
    await db.Operacion.create({
        id_cliente : idcliente,
        fecha: fecha,
        tipo: tipo,
        comprabtc: comprabtc,
        ventabtc: ventabtc,
        monto_soles: montosoles,
        monto_btc: montobtc,
        billetera: billetera,
        cuentabanco: cuentabcp
    })
}

const obtenerOperaciones = async () => {
    const operaciones = await db.Operacion.findAll()
    return operaciones
}


const obtenerOperacion = async (id) => {
    return await db.Operacion.findOne({
        where : {
            id : id
        }
    })
}

const editarOperacion = async (operacion) => {
    await db.Operacion.update({
        estado: operacion.estado},{
        where : {
            id : operacion.id
        } 
    })
}

export { guardarOperacion, obtenerOperaciones, obtenerOperacion, editarOperacion }