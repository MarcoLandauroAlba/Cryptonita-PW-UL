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

export { guardarClienteDatosIniciales,obtenerClienteDatosIniciales }