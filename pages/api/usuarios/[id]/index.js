import { obtenerCliente } from "../../../../dao/clientes";

const ClientesIdHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.body
        const cliente = await obtenerCliente(data.id)
        res.json({
            msg: "",
            cliente : cliente
        })
    }
}

export default ClientesIdHandler