import { obtenerClientexAp } from "../../../../../dao/clientes"

const ClientesApellidoHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.query
        const cliente = await obtenerClientexAp(data.apellidos)
        res.json({
            msg: "",
            cliente : cliente
        })
    }
}

export default ClientesApellidoHandler