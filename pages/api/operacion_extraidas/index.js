const { guardarOperacion, obtenerOperaciones, obtenerOperacion, editarOperacion, obtenerOperacionxIdcliente } = require("../../../dao/operaciones")

const operacionesHandler = async (req, res) => {
    if(req.method == "GET"){
        const operaciones = await obtenerOperaciones()
        const operacionesconEstado = []
        for(let op of operaciones){
            let estado = ""
            if(op.estado == true){
                estado = "Validado"
            }
            else{
                estado = "Por Validar"
            }
            let tipo = ""
            if(op.tipo == true){
                tipo = "Vender"
            }
            else{
                tipo = "Comprar"
            }
            operacionesconEstado.push({
                id_cliente: op.id_cliente,
                tipo: tipo,
                comprabtc: op.comprabtc,
                ventabtc: op.ventabtc,
                monto_soles: op.monto_soles,
                monto_btc: op.monto_btc,
                billetera:op.billetera,
                cuentabanco:op.cuentabanco,
                estado: estado,
                createdAt: op.createdAt,
                updatedAt: op.updatedAt
            })
        }
        res.json({
            msg: "",
            clientes : operacionesconEstado
        })
    }else if(req.method == "POST"){
        console.log("Se debería guardar en la base de datos")
        const data = JSON.parse(req.body)
        await guardarOperacion(data.idcliente,data.tipo,data.comprabtc,data.ventabtc,data.montosoles,data.montobtc,data.billetera,data.cuentabcp)
        res.json({
            msg: ""
        })
    }else if(req.method == "PUT"){
        const data = JSON.parse(req.body)
        await editarOperacion(data)
        res.json({
            msg: ""
        })   
    }
    else{
        res.status(400).json({
            msg: "Método no definido"
        })
    }
}

export default operacionesHandler