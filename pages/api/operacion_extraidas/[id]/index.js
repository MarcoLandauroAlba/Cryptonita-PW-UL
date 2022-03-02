import { obtenerOperacion } from "../../../../dao/operaciones";

const operacionIdHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.body
        const operacion = await obtenerOperacion(data.id)
        const operacionesconEstado = []
        let estado = ""
        if (operacion.estado == true) {
            estado = "Validado"
        }
        else {
            estado = "Por Validar"
        }
        let tipo = ""
        if (operacion.tipo == true) {
            tipo = "Vender"
        }
        else {
            tipo = "Comprar"
        }
        operacionesconEstado.push({
            id_cliente: operacion.id_cliente,
            tipo: tipo,
            comprabtc: operacion.comprabtc,
            ventabtc: operacion.ventabtc,
            monto_soles: operacion.monto_soles,
            monto_btc: operacion.monto_btc,
            billetera: operacion.billetera,
            cuentabanco: operacion.cuentabanco,
            estado: estado,
            createdAt: operacion.createdAt,
            updatedAt: operacion.updatedAt
        })
        res.json({
            msg: "",
            operacion : operacionesconEstado
        })
    }
}

export default OperacionIdHandler