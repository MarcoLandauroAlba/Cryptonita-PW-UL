import { obtenerOperacionxIdcliente } from "../../../../../dao/operaciones"

const operacionIDClienteHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.body
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
            operacion : operacionesconEstado
        })
    }
}

export default OperacionIDClienteHandler