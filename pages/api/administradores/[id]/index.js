import { obtenerAdmin } from "../../../../dao/administradores"


const administradoresIdHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.query
        const cliente = await obtenerAdmin(data.id)
        res.json({
            msg: "",
            cliente : cliente
        })
    }
}

export default administradoresIdHandler