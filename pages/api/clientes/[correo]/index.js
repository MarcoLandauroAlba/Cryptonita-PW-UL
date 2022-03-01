import { obtenerClientexCorr } from "../../../../dao/clientes"

const clientesCorreoHandler = async (req, res) => {
    if (req.method == "GET") {
        const data = req.query
        const correo = data.correo
        const cliente = await obtenerClientexCorr(correo)
        console.log('cliente',cliente)
        res.json({
            msg: "hola",
            cliente: cliente
        })
    }else{
        req.status(400).json({
            msg:'no existe el metodo'
        })
    }
}

export default clientesCorreoHandler