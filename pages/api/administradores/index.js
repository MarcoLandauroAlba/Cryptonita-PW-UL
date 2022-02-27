import { guardarAdmin, obtenerAdmin, obtenerAdmins } from "../../../dao/administradores"

const administradoresIdHandler = async (req, res) => {
    if (req.method == "GET") {
        const data = req.query
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
    }
}

export default administradoresIdHandler