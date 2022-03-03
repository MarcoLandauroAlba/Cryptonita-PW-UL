const db = require("../sequelize/models")

const guardarOperacion = async (idOperacion, idcliente,tipo,comprabtc,ventabtc,montosoles,montobtc,billetera,cuentabcp) => {
    console.log('idOperacion',idOperacion)
    console.log('idcliente',idcliente)
    console.log('tipo',tipo)
    console.log('comprabtc',comprabtc)
    console.log('ventabtc',ventabtc)
    console.log('montosoles',montosoles)
    console.log('montobtc',montobtc)
    console.log('billetera',billetera)
    console.log('cuentabcp',cuentabcp)
    await db.Operacion.create({
        id: idOperacion,
        id_cliente : idcliente,
        tipo: tipo,
        comprabtc: comprabtc,
        ventabtc: ventabtc,
        monto_soles: montosoles,
        monto_btc: montobtc,
        billetera: billetera,
        cuentabanco: cuentabcp,
        estado:false
    })
}

const obtenerOperaciones = async () => {
    const operaciones = await db.Operacion.findAll({
        order : [
            ["createdAt", "DESC"]
        ]
    })
    return operaciones
}

const obtenerOperacionxIdcliente = async (idcliente) => {
    return await db.Operacion.findAll({
        where : {
            id_cliente : idcliente
        },order:[
            ["createdAt", "DESC"]
        ]
    })
}

const obtenerOperacion = async (id) => {
    const respuesta =  await db.Operacion.findOne({
        where : {
            id : id
        }
    })
    return respuesta
}

const editarOperacion = async (operacion) => {
    const operacionAModificar = await obtenerOperacion(operacion.id)
    
    operacionAModificar.id = operacion.id
    operacionAModificar.id_cliente = operacion.id_cliente
    operacionAModificar.tipo = operacion.tipo
    operacionAModificar.comprabtc = operacion.comprabtc
    operacionAModificar.ventabtc = operacion.ventabtc
    operacionAModificar.monto_soles = operacion.monto_soles
    operacionAModificar.monto_btc = operacion.monto_btc
    operacionAModificar.billetera = operacion.billetera
    operacionAModificar.cuentabanco = operacion.cuentabanco
    operacionAModificar.estado = operacion.estado

    await operacionAModificar.save()
}

export { guardarOperacion, obtenerOperaciones, obtenerOperacion, editarOperacion, obtenerOperacionxIdcliente }