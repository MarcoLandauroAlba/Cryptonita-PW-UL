import { obtenerOperacionxIdcliente } from "../../../../../dao/operaciones"

const OperacionIDClienteHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.query
        const operacion = await obtenerOperacionxIdcliente(data.idcliente)
        const operacionesconEstado = []
        for(let op of operacion){
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
                id:op.id,
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
            operacion : operacionesconEstado
        })
    }
}

export default OperacionIDClienteHandler