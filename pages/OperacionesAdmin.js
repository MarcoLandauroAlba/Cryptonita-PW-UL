import MenuNavegacion from "../components/menuNavegacion.component";
import Footer from "../components/footer.component";
import ListaOperaciones from "../components/ListaOperaciones.component"
import ModalModificarOperacion from "../components/modalModificarOperacion.component";
import { useEffect, useState } from 'react'
import { guardarDatoCliente, guardarDatosGenerales, guardarDatoTipoCliente, obtenerDatoCliente, obtenerDatoTipoCliente } from '../dao/cliente_local'
import { EntregarPaginaAnterior, guardarPaginasAnteriores } from '../dao/paginas_anteriores_local'

const OperacionesAdminPage = () => {

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
    const direccionActual = '/OperacionesAdmin'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'OperacionesAdmin'

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
        buscarListaDeOperacionesEnBD()
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




    const [listadoDeOperaciones, setListadoDeOperaciones] = useState([])

    const buscarListaDeOperacionesEnBD = () => {

        // TODO: HACER PETICION A BACKEND PARA OBTENER TODAS LAS OPERACIONES REALIZADAS EN EL TRABAJO

        setListadoDeOperaciones([
            { numero: 1, id: "arnodorian020", fecha: "10/01/2022 16:54", cliente: "Jose Lavarte", tipoOperacion: "Compra", tipoCambio: 167124.42, estado: 0, monto: 3 },
            { numero: 2, id: "ardTreat", fecha: "20/01/2022 08:40", cliente: "Juan Quintero", tipoOperacion: "Venta", tipoCambio: 167124.42, estado: 1, monto: 4 },
            { numero: 3, id: "reseAlm", fecha: "16/02/2021 09:34", cliente: "Pedro Malaver", tipoOperacion: "Compra", tipoCambio: 167124.42, estado: 0, monto: 8 }
        ])
    }

    // FALTA REALIZAR LA FUNCION PARA CAMBIAR LOS DATOS DE LAS OPERACIONES Y PASARLO COMO PROPS A ModalModificarOperacion

    const [mostrar, setMostrar] = useState(false)
    const [operacion, setOperacion] = useState({})

    const Actualizar = (operacion) => {
        // CODIGO PARA ACTUALIZAR UNA OPERACION
        console.log(operacion)
        setOperacion(operacion)
        setMostrar(true)
    }
    const ocultar = () => {
        setMostrar(false)
    }

    const guardar = (idOperacion, estado) => {
        // CODIGO PARA ACTUALIZAR UNA OPERACION
        console.log(idOperacion)
        console.log(estado)
        // TODO: ENVIAR DATOS ACTUALIZADOS A BASE DE DATOS

        // TODO: ACTUALIZAR VALOR DE LA LISTA DE OPERACIONES PARA QUE RENDERIZE UNA NUEVA LISTA
    }

    return (
        <div>
            <MenuNavegacion
                tipoDeCliente={tipoDeCliente}
                redireccionamiento={RedirigirAOtraPagina}
                salir={TerminarSesionActiva}
                ubicacion={ubicacionActual}
            />
            <ListaOperaciones
                tipoDeCliente={tipoDeCliente}               /*SEGURIDAD*/
                lista={listadoDeOperaciones}
                actualizar={Actualizar}
            />
            <ModalModificarOperacion
                mostrar={mostrar}
                operacion={operacion}
                ocultar={ocultar}
                guardar={guardar}
            />

            <Footer
                redireccionamiento={RedirigirAOtraPagina}
            />
        </div>
    )
}

export default OperacionesAdminPage