import { guardarCliente, obtenerCliente, obtenerClientes, editarOperacion, obtenerClientexCorreoYContrasena } from "../../../dao/clientes"

const clientesIdHandler = async (req, res) => {
    if (req.method == "OPTIONS") {
        const data = JSON.parse(req.body)
        const cliente = await obtenerClientexCorreoYContrasena(data.correo,data.contraseña) 
        res.json({
            msg: 'OPTIONS',
            cliente: cliente
        })

    }else if(req.method == "SHOW"){
        const clientes = await obtenerClientes()
        res.json({
            msg: "",
            clientes:clientes
        })
    }else if(req.method == "POST"){
        const data = req.query
        const cliente = await guardarCliente(data)
        console.log("Se guardara el proyecto con id " + data.id)
        res.json({
            msg: "",
            cliente:cliente
        })
    }else if (req.method == "PUT"){
        const data = req.query
        const cliente = await editarOperacion(data)
        console.log("Se modificara el proyecto con id " + data.id)
        res.json({
            msg: "",
        })
    }
}

export default clientesIdHandler