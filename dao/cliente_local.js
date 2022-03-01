const guardarClienteDatosIniciales = (nombre, apellido, dni) => {
    const cliente = {
        nombre: nombre,
        apellido: apellido,
        dni: dni
    }
    localStorage.setItem("fpr1",JSON.stringify(cliente))
}
const obtenerClienteDatosIniciales = () => {
    const clienteStr = localStorage.getItem("fpr1")
    return JSON.parse(clienteStr)
}

export { guardarClienteDatosIniciales,obtenerClienteDatosIniciales }