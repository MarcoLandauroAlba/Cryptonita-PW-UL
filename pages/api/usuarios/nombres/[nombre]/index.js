import { obtenerClientexNom } from "../../../../../dao/clientes"

const ClientesNombreHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.query
        const cliente = await obtenerClientexNom(data.nombre)
        res.json({
            msg: "",
            cliente : cliente
        })
    }
}

export default ClientesNombreHandler