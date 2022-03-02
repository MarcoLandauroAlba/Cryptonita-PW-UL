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

const obtenerClientexDNI = async (dni) => {
    return await db.Cliente.findOne({
        where : {
            dni : dni
        }
    })
}

const obtenerClientexNom = async (nombre) => {
    return await db.Cliente.findOne({
        where : {
            nombre : nombre
        }
    })
}

const obtenerClientexAp = async (apellido) => {
    return await db.Cliente.findOne({
        where : {
            apellido : apellido
        }
    })
}

const obtenerClientexCorr = async (correo) => {
    return await db.Cliente.findOne({
        where : {
            correo : correo
        }
    })
}

const obtenerClientes = async () => {
    const admins = await db.Cliente.findAll({
        order : [
            ["id", "ASC"]
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

export {guardarCliente, obtenerCliente, obtenerClientes, editarOperacion, modificarCliente, obtenerClientexAp, obtenerClientexCorr, obtenerClientexNom, obtenerClientexDNI}