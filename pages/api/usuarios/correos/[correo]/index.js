import { obtenerClientexCorr } from "../../../../../dao/clientes"


const ClientesCorreoHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.query
        const cliente = await obtenerClientexCorr(data.correo)
        res.json({
            msg: "",
            cliente : cliente
        })
    }
}

export default ClientesCorreoHandler