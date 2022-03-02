import { guardarAdmin, obtenerAdmin, obtenerAdmins, obtenerAdminxCorreoYContrasena } from "../../../dao/administradores"

const administradoresIdHandler = async (req, res) => {
    if (req.method == "OPTIONS") {
        const data = JSON.parse(req.body)
        const admin = await obtenerAdminxCorreoYContrasena(data.correo,data.contrasena)
        res.json({
            msg: 'OPTIONS',
            admin: admin
        })
    }else if (req.method == "GET") {
        const data = req.body
        const admin = await obtenerAdmin(data.id)
        res.json({
            msg: "",
            administrador : admin
        })
    }else if(req.method == "SHOW"){
        const administradores = await obtenerAdmins()
        res.json({
            msg: "",
            administradores:administradores
        })
    }else if(req.method == "POST"){
        const data = req.query
        const admin = await guardarAdmin(data)
        console.log("Se guardara el proyecto con id " + data.id)
        res.json({
            msg: "",
            administrador:admin
        })
    }else{
        res.status(400).json({
            msg: "Método no definido"
        })
    }
}

export default administradoresIdHandler