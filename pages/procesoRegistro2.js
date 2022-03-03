import Footer from "../components/footer.component"
import FormularioProcesoRegistro2 from "../components/FormularioProcesoRegistro2.component"
import MenuNavegacion from "../components/menuNavegacion.component"
import { useEffect, useState } from 'react'
import { guardarDatoCliente, guardarDatosGenerales, guardarDatoTipoCliente, obtenerClienteDatosIniciales, obtenerDatoCliente, obtenerDatoTipoCliente } from '../dao/cliente_local'
import { EntregarPaginaAnterior, guardarPaginasAnteriores } from '../dao/paginas_anteriores_local'

const ProcesoRegistro2Page = () => {

    // ********************************************************************************************************************************************************************************************************
    // ========================================================================================================================================================================================================
    // ********************************************************************************************************************************************************************************************************
    // ========================================================================================================================================================================================================
    // ********************************************************************************************************************************************************************************************************
    // INICIO: EL CODIGO ESCRITO DESDE AQUI HASTA LA SIGUIENTE SEÑAL, SERA COPIADO EN TODAS LAS PANTALLAS, LO QUE SE QUIERA AGREGAR, QUE SEA ABAJO =================================

    //Cliente es utilizado para guardar los datos mas importantes del usuario loggeado al momento
    const [cliente, setCliente] = useState(-1)
    //Tipo de cliente es para saber el tipo (de 4 opciones) de cliente loggeado al momento
    const [tipoDeCliente, setTipoDeCliente] = useState(4)
    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/procesoRegistro2'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'procesoRegistro2'

    useEffect(() => {
        const AsyncUseEffect = async () => {
            // Si se ingresa al if es porque recien se ingresa POR PRIMERA VEZ a la pagina desde un navegador
            if (obtenerDatoCliente() == null) {
                guardarDatoCliente(cliente)
                guardarDatoTipoCliente(tipoDeCliente)
            } else {
                setCliente(parseInt(obtenerDatoCliente()))
                if (cliente != -1) {
                    // SI INGRESA AQUI SIGNIFICA QUE ES UN CLIENTE CON ID REGISTRADO EN EL NAVEGADOR
                    // BUSCAR EN BASE DE DATOS QUE TIPO DE CLIENTE ES
                    const DatoTipoCliente = obtenerDatoTipoCliente()
                    if (DatoTipoCliente == 1) {
                        // BUSCAR EN ADMIN
                        const responseAdmin = await fetch(`api/administradores/${cliente}`)
                        const dataAdmin = await responseAdmin.json()
                        if (dataAdmin.cliente != null) {
                            // SI INGRESA: EL ADMINISTRADOR SI EXISTE EN BASE DE DATOS
                            guardarDatosGenerales(cliente, 1)
                            setTipoDeCliente(1)
                        } else {
                            // SI INGRESA: EL ADMINISTRADOR NO EXISTE Y SE SETEARA TODO A CLIENTE INVITADO
                            guardarDatosGenerales(-1, 4)
                            setCliente(-1)
                            setTipoDeCliente(4)
                        }
                    } else if (DatoTipoCliente == 2 || DatoTipoCliente == 3) {
                        // BUSCAR EN CLIENTES
                        const responseClienteCompleta = await fetch(`api/usuarios/${cliente}`)
                        const dataClienteCompleta = await responseClienteCompleta.json()
                        if (dataClienteCompleta.cliente == null) {
                            // SI INGRESA, SIGNIFICA QUE EL USUARIO NO EXISTE, POR LO CUAL LAS CREDENCIALES SON INVALIDAS
                            guardarDatosGenerales(-1, 4)
                            setCliente(-1)
                            setTipoDeCliente(4)
                        } else {
                            // SI INGRESA, SIGNIFICA QUE EL USUARIO SI EXISTE Y AHORA DETERMINAREMOS SI ES:
                            // USUARIO CONFIRMADO (2) O USUARIO NO CONFIRMADO (3)
                            if (dataClienteCompleta.cliente.estado == false) {
                                // USUARIO NO CONFIRMARDO
                                setTipoDeCliente(3)
                                guardarDatosGenerales(cliente,3)
                            } else if (dataClienteCompleta.cliente.estado == true) {
                                // USUARIO CONFIRMARDO
                                setTipoDeCliente(2)
                                guardarDatosGenerales(cliente,2)
                            } else {
                            }
                        }
                    } else {
                        guardarDatosGenerales(-1, 4)
                        setCliente(-1)
                        setTipoDeCliente(4)
                    }
                    // LUEGO DE BUSCAR EN BASE DE DATOS, ALMACENAR EN EL LS EL TIPO DE DE USUARIO QUE ES
                }
            }
        }
        AsyncUseEffect()
        confirmarSiPasoAnteriorRealizado()
    }, [cliente, tipoDeCliente])

    // Props: redireccionamiento    => Mantiene el tipo de usuario actual
    const RedirigirAOtraPagina = (direccion) => {
        guardarPaginasAnteriores(direccionActual)
        guardarDatosGenerales(cliente, tipoDeCliente)
        location.href = direccion
    }

    // Props: salir                 => Elimina los datos del usuario actual
    const TerminarSesionActiva = () => {
        guardarPaginasAnteriores(direccionActual)
        guardarDatosGenerales(-1, 4)
        location.href = '/'
    }

    // NORMALMENTE SERVIRA COMO UN PROPS PARA LOS BOTONES DE "REGRESAR"
    // props: volver
    const VolverAPaginaAnterior = () => {
        const respuesta = EntregarPaginaAnterior(direccionActual)
        if (respuesta != null) {
            location.href = respuesta
        }
    }

    // FIN: EL CODIGO ESCRITO HASTA AQUI, SERA COPIADO EN TODAS LAS PANTALLAS, LO QUE SE QUIERA AGREGAR, QUE SEA ABAJO =================================
    // ********************************************************************************************************************************************************************************************************
    // ========================================================================================================================================================================================================
    // ********************************************************************************************************************************************************************************************************
    // ========================================================================================================================================================================================================
    // ********************************************************************************************************************************************************************************************************
    // ESPACIO PARA ESCRIBIR CODIGO EXTRA 





    //Si el CORREO se repite, se cambia a estado falso
    const [disponible, setDisponible] = useState(true)

    // SE UTILIZAN PARA DETERMINAR SI HAN SIDO RELLENADOS LOS CAMPOS SOLICITADOS
    const [faltaCorreo, setFaltaCorreo] = useState(false)
    const [faltaContraOri, setFaltaContraOri] = useState(false)
    const [faltaContraRep, setFaltaContraRep] = useState(false)
    const [faltaTelefono, setFaltaTelefono] = useState(false)

    // VALIDA SI EL CORREO INGRESADO CUMPLE CON EL FORMATO REQUERIDO PARA EXISTIR
    const validarEmail = (correo) => {
        if ((/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(correo)) {
            return true
        } else {
            return false
        }
    }

    // VALIDA SI EL CORREO EXISTE EN BASE DE DATOS O NO
    const existeCorreoEnBaseDeDatos = async (correo) => {
        const response = await fetch(`/api/usuarios/correos/${correo}`,{method: 'OPTIONS'})
        const data = await response.json()
        console.log('existeCorreoEnBaseDeDatos data ', data)
        if (data.cliente == null) {
            return false
        } else {
            return true
        }
    }

    const GuardarClienteOnHandler = async (correo, contrasenaOriginal, contrasenaRepe, telefono) => {
        // PRIMERO CORROBORAMOS QUE TODOS LOS DATOS SOLICITADOS ESTAN COMPLETOS
        let EfaltaCorreo = true
        let EfaltaContraOri = true
        let EfaltaContraRep = true
        let EfaltaTelefono = true
        let ENodisponible = false

        console.log('validarEmail(correo)', validarEmail(correo))
        if (!validarEmail(correo)) {
            setFaltaCorreo(true)
        } else {
            setFaltaCorreo(false)
            EfaltaCorreo = false
        }
        if (contrasenaOriginal == '') {
            setFaltaContraOri(true)
        } else {
            setFaltaContraOri(false)
            EfaltaContraOri = false
        }
        if (contrasenaRepe == '') {
            setFaltaContraRep(true)
        } else {
            if (contrasenaRepe == contrasenaOriginal) {
                setFaltaContraRep(false)
                EfaltaContraRep = false
            } else {
                setFaltaContraRep(true)
            }
        }
        if (telefono == undefined) {
            setFaltaTelefono(true)
        } else {
            if (telefono.toString().length == 7 || telefono.toString().length == 9) {
                setFaltaTelefono(false)
                EfaltaTelefono = false
            } else {
                setFaltaTelefono(true)
            }
        }
        // // REVISAMOS SI EL CORREO EXISTE EN LA BASE DE DATOS
        if (!EfaltaCorreo) {
            const preguntaExiste = await existeCorreoEnBaseDeDatos(correo)
            console.log('preguntaExiste',preguntaExiste)
            setDisponible(!preguntaExiste)
            if (preguntaExiste) {
                ENodisponible = true
            } else {
                ENodisponible = false
            }
        }

        // SI INGRESA A ESTA CONDICIONAL, SIGNIFICA QUE TODO LO INGRESADO ES VALIDO PARA CREAR UNA CUENTA
        if (!EfaltaCorreo && !EfaltaContraOri && !EfaltaContraRep && !EfaltaTelefono && !ENodisponible) {
            console.log('entrooooooo')
            // TODO: FALTA COMUNICARSE CON EL BACKEND PARA REALIZAR LA CREACION DE DATOS
            const clienteintancia = obtenerClienteDatosIniciales()
            const nombre = clienteintancia.nombre
            const apellido = clienteintancia.apellido
            const dni = parseInt(clienteintancia.dni)
            //TODO:SE MANDA A ESPERA HASTA QUE UN ADMINISTRADOR PERMITA EL LOGEO DEL CLIENTE
            const estado = false

            const clientePorGuardar = {
                nombre: nombre,
                apellido: apellido,
                dni: dni,
                correo: correo,
                telefono: telefono,
                contrasena: contrasenaOriginal,
                estado: estado
            }
            console.log('cliente12+', clientePorGuardar)

            const resp = await fetch("/api/usuarios", {
                method: "POST",
                body: JSON.stringify(clientePorGuardar)
            })
            const data = await resp.json()

            //TODO: SE REALIZA LA ELIMINACION DEL CLIENTE EN PRIMERA INSTANCIA EN EL LOCALSTORAGE
            localStorage.removeItem('fpr1')

            // DE LA SIGUIENTE PETICION SE OBTENDRA EL ID DEL CLIENTE CREADO
            const responseCliente = await fetch(`/api/usuarios/correos/${correo}`,{method: 'OPTIONS'})
            const dataCliente = await responseCliente.json()
            console.log('cliente recien creado: ', dataCliente)

            RedirigirAPaginaPrincipalDeEsperaConLoggeo(dataCliente.cliente.id)
        }
    }

    const [procede, setProcede] = useState(true)

    const confirmarSiPasoAnteriorRealizado = () => {
        if (localStorage.getItem('fpr1') != null) {
            setProcede(true)
        } else {
            setProcede(false)
        }
    }

    const RedirigirAPaginaPrincipalDeEsperaConLoggeo = (VALORcliente) => {
        guardarPaginasAnteriores(direccionActual)
        localStorage.setItem('cliente', VALORcliente)
        localStorage.setItem('tipoCliente', 3)
        location.href = '/EsperaRegistro'
    }

    return (
        <div>
            <MenuNavegacion
                tipoDeCliente={tipoDeCliente}
                redireccionamiento={RedirigirAOtraPagina}
                salir={TerminarSesionActiva}
                ubicacion={ubicacionActual}
            />
            <FormularioProcesoRegistro2
                guardar={GuardarClienteOnHandler}
                volver={VolverAPaginaAnterior}
                disponible={disponible}
                procede={procede}
                VerFaltaCorreo={faltaCorreo}
                VerFaltaContraOri={faltaContraOri}
                VerFaltaContraRep={faltaContraRep}
                VerFaltaTelefono={faltaTelefono}
            />
            <Footer
                redireccionamiento={RedirigirAOtraPagina}
            />
        </div>)
}
export default ProcesoRegistro2Page