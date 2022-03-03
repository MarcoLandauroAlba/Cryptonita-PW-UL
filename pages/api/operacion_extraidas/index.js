const { guardarOperacion, obtenerOperaciones, obtenerOperacion, editarOperacion, obtenerOperacionxIdcliente } = require("../../../dao/operaciones")

const operacionesHandler = async (req, res) => {
    if(req.method == "GET"){
        const operaciones = await obtenerOperaciones()
        const operacionesconEstado = []
        console.log(operaciones)
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
                tipo = "Venta"
            }
            else{
                tipo = "Compra"
            }
            operacionesconEstado.push({
                id: op.id,
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
            operaciones : operacionesconEstado
        })
    }else if(req.method == "POST"){
        const data = JSON.parse(req.body)
        await guardarOperacion(data.id_cliente,data.tipo,data.comprabtc,data.ventabtc,data.monto_soles,data.monto_btc,data.billetera,data.cuentabcp)
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