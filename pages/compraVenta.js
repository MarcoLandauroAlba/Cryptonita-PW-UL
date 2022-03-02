import CompCompraVenta from "../components/CompCompraVenta.component"
import Footer from "../components/footer.component"
import MenuNavegacion from "../components/menuNavegacion.component"

const compraVenta = () => {

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
    const direccionActual = '/compraVenta'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'compraVenta'

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
                                guardarDatoTipoCliente(3)
                            } else if (dataClienteCompleta.cliente.estado == true) {
                                // USUARIO CONFIRMARDO
                                setTipoDeCliente(2)
                                guardarDatoTipoCliente(2)
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

    return (
        <div>
            <MenuNavegacion
                tipoDeCliente={tipoDeCliente}
                redireccionamiento={RedirigirAOtraPagina}
                salir={TerminarSesionActiva}
                ubicacion={ubicacionActual}
            />
            <CompCompraVenta />
            <Footer
                redireccionamiento={RedirigirAOtraPagina}
            />
        </div>
    )
}

export default compraVenta