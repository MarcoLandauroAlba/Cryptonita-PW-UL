import { guardarCliente, obtenerCliente, obtenerClientes, editarOperacion } from "../../../dao/clientes"

const clientesIdHandler = async (req, res) => {
    if (req.method == "GET") {
        const data = req.query
        const cliente = await obtenerCliente(data.id)
        res.json({
            msg: "hola"
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