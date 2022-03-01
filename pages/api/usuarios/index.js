const { obtenerClientes, guardarCliente, modificarCliente } = require("../../../dao/clientes")

const clientesHandler = async (req, res) => {
    if(req.method == "GET"){
        const clientes = await obtenerClientes()
        const clientesconEstado = []
        for(let cliente of clientes){
            let estado = ""
            if(cliente.estado == true){
                estado = "Validado"
            }
            else{
                estado = "Por Validar"
            }
            clientesconEstado.push({
                id: cliente.id,
                nombre: cliente.nombre,
                apellido: cliente.apellido,
                dni: cliente.dni,
                correo: cliente.correo,
                telefono: cliente.telefono,
                estado: estado,
                createdAt: cliente.createdAt,
                updatedAt: cliente.updatedAt
            })
        }
        res.json({
            msg: "",
            clientes : clientesconEstado
        })
    }else if(req.method == "POST"){
        console.log("Se debería guardar en la base de datos")
        const data = JSON.parse(req.body)
        await guardarCliente(data.estado, data.telefono, data.contraseña, data.correo,data.nombre, data.apellido, data.dni)
        res.json({
            msg: ""
        })
    }else if(req.method == "PUT"){
        const data = JSON.parse(req.body)
        await modificarCliente(data)
        res.json({
            msg: ""
        })   
    }else{
        res.status(400).json({
            msg: "Método no definido"
        })
    }
}

export default clientesHandler