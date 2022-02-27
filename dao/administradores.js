const db = require("../sequelize/models")

const guardarAdmin = async (telefono,contraseña,correo,nombre,apellido,dni) => {
    const admin = await db.Administrador.create({
        telefono: telefono,
        contraseña: contraseña,
        correo: correo,
        nombre: nombre,
        apellido: apellido,
        dni: dni
    })
    return admin
}

const obtenerAdmin = async (id) => {
    return await db.Administrador.findOne({
        where : {
            id : id
        }
    })
}

const obtenerAdmins = async () => {
    const admins = await db.Administrador.findAll()
    return admins
}


export {guardarAdmin, obtenerAdmin, obtenerAdmins}