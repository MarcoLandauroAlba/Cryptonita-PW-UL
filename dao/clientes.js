const db = require("../sequelize/models")

const guardarCliente = async (estado,telefono,contraseña,correo,nombre,apellido,dni) => {
    const admin = await db.Cliente.create({
        estado: estado,
        telefono: telefono,
        contraseña: contraseña,
        correo: correo,
        nombre: nombre,
        apellido: apellido,
        dni: dni
    })
    return admin
}

const obtenerCliente = async (id) => {
    return await db.Cliente.findOne({
        where : {
            id : id
        }
    })
}

const obtenerClientes = async () => {
    const admins = await db.Cliente.findAll({
        order : [
            ["id", "DESC"]
        ]
    })
    return admins
}

const modificarCliente = async (cliente) => {
    const clienteAModificar = await obtenerCliente(cliente.id)
    
    clienteAModificar.id = cliente.id
    clienteAModificar.nombre = cliente.nombre
    clienteAModificar.apellido = cliente.apellido
    clienteAModificar.dni = cliente.dni
    clienteAModificar.correo = cliente.correo
    clienteAModificar.telefono = cliente.telefono
    clienteAModificar.estado = cliente.estado

    await clienteAModificar.save()
}

const editarOperacion = async (cliente) => {
    await db.Cliente.update({
        estado : cliente.estado},{
        where : {
            id : cliente.id
        },
        estado: cliente.estado
    })
}

export {guardarCliente, obtenerCliente, obtenerClientes, editarOperacion, modificarCliente}