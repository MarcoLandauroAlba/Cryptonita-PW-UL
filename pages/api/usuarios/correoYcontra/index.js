import { obtenerClientexCorreoYContrasena } from "../../../../dao/clientes"


const ClientesCorreoYContraHandler = async (req, res) => {
    if(req.method == "OPTIONS"){
        const data = JSON.parse(req.body)
        const respuesta = await obtenerClientexCorreoYContrasena(data.correo,data.contrasena)
        res.json({
            msg: "",
            cliente : respuesta
        })
    }else{
        res.status(400).json({
            msg:''
        })
    }
}

export default ClientesCorreoYContraHandler