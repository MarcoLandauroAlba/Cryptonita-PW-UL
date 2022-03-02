const guardarClienteDatosIniciales = (nombre, apellido, dni) => {
    const cliente = {
        nombre: nombre,
        apellido: apellido,
        dni: dni
    }
    localStorage.setItem("fpr1",JSON.stringify(cliente))
}
const obtenerClienteDatosIniciales = () => {
    return JSON.parse(localStorage.getItem("fpr1"))
}
const guardarDatosGenerales = (id,tipo) => {
    localStorage.setItem('cliente',id)
    localStorage.setItem('tipoCliente',tipo)
}

export { guardarClienteDatosIniciales,obtenerClienteDatosIniciales,guardarDatosGenerales }