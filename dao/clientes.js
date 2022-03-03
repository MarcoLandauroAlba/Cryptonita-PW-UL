import { Sequelize } from "../sequelize/models"
const  Op  = Sequelize.Op
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
    
    const respuesta = await db.Cliente.findOne({
        where : {
            id : id
        }
    })
    return respuesta 
}

const obtenerClientexDNI = async (dni) => {
    return await db.Cliente.findAll({
        where : {
            dni : {
                [Op.like]: '%'+dni+'%'
            }
        }
    })
}

const obtenerClientexNom = async (nombre) => {
    return await db.Cliente.findAll({
        where : {
            nombre : {
                [Op.like]: '%'+nombre+'%'
            }
        }
    })
}

const obtenerClientexAp = async (apellido) => {
    return await db.Cliente.findAll({
        where : {
            apellido : {
                [Op.like]: '%'+apellido+'%'
            }
        }
    })
}

const obtenerClientexCorr = async (correo) => {
    return await db.Cliente.findAll({
        where : {
            correo : {
                [Op.like]: '%'+correo+'%'
            }
        }
    })
}
// ESTE USA MARCO PARA EL REGISTRO DE CLIENTES
const obtenerClientexCorr2 = async (correo) => {
    return await db.Cliente.findOne({
        where: {
            correo: correo,
        }
    })
}

const obtenerClientexCorreoYContrasena = async(correo, contrasena) => {
    return await db.Cliente.findOne({
        where: {
            correo: correo,
            contraseña: contrasena
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

export {guardarCliente,obtenerClientexCorr2, obtenerCliente, obtenerClientes, editarOperacion, modificarCliente, obtenerClientexAp, obtenerClientexCorr, obtenerClientexNom, obtenerClientexDNI, obtenerClientexCorreoYContrasena}