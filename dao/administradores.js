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
    console.log('obtenerAdmin',id)
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

const obtenerAdminxCorreoYContrasena = async (correo,contrasena) => {
    return await db.Administrador.findOne({
        where: {
            correo: correo,
            contraseña: contrasena
        }
    })
}


export {guardarAdmin, obtenerAdmin, obtenerAdmins, obtenerAdminxCorreoYContrasena}