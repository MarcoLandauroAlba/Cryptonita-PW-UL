import { obtenerClientexDNI } from "../../../../../dao/clientes"


const ClientesDNIHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.query
        console.log(data)
        const cliente = await obtenerClientexDNI(data.dni)
        res.json({
            msg: "",
            cliente : cliente
        })
    }
}

export default ClientesDNIHandler