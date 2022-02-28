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
}

const obtenerCliente = async (id) => {
    return await db.Cliente.findOne({
        where : {
            id : id
        }
    })
}

const obtenerClientes = async () => {
    const admins = await db.Cliente.findAll()
    return admins
}

const editarOperacion = async (cliente) => {
    await db.Cliente.update({
        estado: cliente.estado},{
        where : {
            id : cliente.id
        },
        estado: cliente.estado
    })
}

export {guardarCliente, obtenerCliente, obtenerClientes, editarOperacion}