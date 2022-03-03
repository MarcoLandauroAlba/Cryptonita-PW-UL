import CompCompraVenta from "../components/CompCompraVenta.component"
import Footer from "../components/footer.component"
import MenuNavegacion from "../components/menuNavegacion.component"
import { useEffect, useState } from 'react'
import { guardarDatoCliente, guardarDatosGenerales, guardarDatoTipoCliente, obtenerDatoCliente, obtenerDatoTipoCliente } from '../dao/cliente_local'
import { EntregarPaginaAnterior, guardarPaginasAnteriores } from '../dao/paginas_anteriores_local'
import ModalClienteP1C from "../components/modalClienteP1C.component"
import ModalClienteP2C from "../components/modalClienteP2C.component"
import ModalClienteP3C from "../components/modalClienteP3C.component"
import ModalClienteP1V from "../components/modalClienteP1V.component"
import ModalClienteP2V from "../components/modalClienteP2V.component"
import ModalClienteP3V from "../components/modalClienteP3V.component"
const CompraVenta = () => {

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
    const direccionActual = '/CompraVenta'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'CompraVenta'

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
                                guardarDatosGenerales(cliente, 3)
                            } else if (dataClienteCompleta.cliente.estado == true) {
                                // USUARIO CONFIRMARDO
                                setTipoDeCliente(2)
                                guardarDatosGenerales(cliente, 2)
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





    const [valorCripto, setValorCripto] = useState(0)
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const AsyncUseEffect = async () => {

            const base_url = 'https://api.binance.com'
            const query = '/api/v1/depth?symbol=BTCUSDT'
            const response = await fetch(base_url + query)
            const data = await response.json()
            setValorCripto(data.asks[99][0])
        }
        AsyncUseEffect()
    }, [seconds])





    const [mostrarModalP1C, setMostrarModalP1C] = useState(false)
    const [mostrarModalP2C, setMostrarModalP2C] = useState(false)
    const [mostrarModalP3C, setMostrarModalP3C] = useState(false)
    const [mostrarModalP1V, setMostrarModalP1V] = useState(false)
    const [mostrarModalP2V, setMostrarModalP2V] = useState(false)
    const [mostrarModalP3V, setMostrarModalP3V] = useState(false)

    const onOcultarModalP1C = () => {
        setMostrarModalP1C(false)
    }
    const onOcultarModalP2C = () => {
        setMostrarModalP2C(false)
    }
    const onOcultarModalP3C = () => {
        setMostrarModalP3C(false)
    }
    const onOcultarModalP1V = () => {
        setMostrarModalP1V(false)
    }
    const onOcultarModalP2V = () => {
        setMostrarModalP2V(false)
    }
    const onOcultarModalP3V = () => {
        setMostrarModalP3V(false)
    }



    const HabilitarModalP1C = () => {
        setMostrarModalP1C(true)
    }
    const HabilitarModalP2C = () => {
        setMostrarModalP2C(true)
    }
    const HabilitarModalP3C = () => {
        setMostrarModalP3C(true)
    }
    const HabilitarModalP1V = () => {
        setMostrarModalP1V(true)
    }
    const HabilitarModalP2V = () => {
        setMostrarModalP2V(true)
    }
    const HabilitarModalP3V = () => {
        setMostrarModalP3V(true)
    }

    const [billetera, setBilletera] = useState()
    const [cuenta, setCuenta] = useState()
    const [idOperacion, setIdOperacion] = useState()
    const [operacion, setOperacion] = useState()

    const obtenerOperacionesRealizadas = async () => {
        let response = await fetch("/api/operacion_extraidas")
        const data = await response.json()
        return data
    }

    const CrearBilletera = async (valor) => {
        if (valor == '') {
            setBilletera('')
            setIdOperacion('')
        } else {
            setBilletera(valor.toString())
            const listaDeOperaciones = await obtenerOperacionesRealizadas()
            const tamano = listaDeOperaciones.operaciones.length
            setIdOperacion(valor + tamano.toString())
        }
    }

    const CrearCuenta = async (valor) => {
        if (valor == '') {
            setCuenta('')
            setIdOperacion('')
        } else {
            setCuenta(valor.toString())
            const listaDeOperaciones = await obtenerOperacionesRealizadas()
            const tamano = listaDeOperaciones.operaciones.length
            setIdOperacion(valor + tamano.toString())
            console.log('valor+tamano.toString()'.valor + tamano.toString())
        }
    }

    const CrearOperacion = async (BTipo, Comprabtc, Ventabtc, MontoSoles, MontoBTC, txtBilletera, Cuentabanco, txtEstado) => {
        console.log('Comprabtc',Comprabtc)
        let operacionesconId
        if(Comprabtc==true){
            operacionesconId = {
                id: idOperacion,
                id_cliente: cliente,
                tipo: BTipo,
                comprabtc: valorCripto * 3.75,
                ventabtc: 0,
                monto_soles: MontoSoles,
                monto_btc: MontoBTC,
                billetera: txtBilletera,
                cuentabcp: Cuentabanco,
                estado: txtEstado,
            }
        }else if(Ventabtc==true){
            operacionesconId = {
                id: idOperacion,
                id_cliente: cliente,
                tipo: BTipo,
                comprabtc: 0,
                ventabtc: valorCripto * 3.75,
                monto_soles: MontoSoles,
                monto_btc: MontoBTC,
                billetera: txtBilletera,
                cuentabcp: Cuentabanco,
                estado: txtEstado,
            }
        }
        setOperacion(operacionesconId)
        console.log('operacionesconId aqui', operacionesconId)

        let response = await fetch("/api/operacion_extraidas", {
            method: "POST",
            body: JSON.stringify(operacionesconId)
        })
        const data = await response.json()
        console.log(data)
    }


    const [cComp, setCComp] = useState(0)
    const [cVent, setCVent] = useState(0)
    const [multComp, setMultComp] = useState(0)
    const [multVent, setMultVent] = useState(0)

    const establecerCComp = (cantidad) => {
        setCComp(cantidad)
    }
    const establecerCVent = (cantidad) => {
        setCVent(cantidad)
    }
    const establecerMultComp = (cantidad) => {
        setMultComp(cantidad)
    }
    const establecerMultVent = (cantidad) => {
        setMultVent(cantidad)
    }

    return (
        <div>
            <MenuNavegacion
                tipoDeCliente={tipoDeCliente}
                redireccionamiento={RedirigirAOtraPagina}
                salir={TerminarSesionActiva}
                ubicacion={ubicacionActual}
            />
            <CompCompraVenta
                valor={valorCripto}
                habilitarModal1C={HabilitarModalP1C}
                habilitarModal1V={HabilitarModalP1V}
                establecerCComp={establecerCComp}
                establecerCVent={establecerCVent}
                establecerMultComp={establecerMultComp}
                establecerMultVent={establecerMultVent}
            />
            <Footer
                redireccionamiento={RedirigirAOtraPagina}
            />


            <ModalClienteP1C
                almacenarBilletera={CrearBilletera}
                onOcultar={onOcultarModalP1C}
                onMostrar={mostrarModalP1C}
                habilitarModal2C={HabilitarModalP2C}
            />
            <ModalClienteP2C
                onOcultar={onOcultarModalP2C}
                onMostrar={mostrarModalP2C}
                idOperacion={idOperacion}
                habilitarModal3C={HabilitarModalP3C}
                almacenarOperacion={CrearOperacion}
                montoBitCoin={valorCripto}
                soles={cComp}
                bitcoins={multComp}
                billetera={billetera}
            />
            <ModalClienteP3C
                onOcultar={onOcultarModalP3C}
                onMostrar={mostrarModalP3C}
                idOperacion={idOperacion}
            />

            <ModalClienteP1V
                almacenarCuenta={CrearCuenta}
                onOcultar={onOcultarModalP1V}
                onMostrar={mostrarModalP1V}
                habilitarModal2V={HabilitarModalP2V}
            />
            <ModalClienteP2V
                onOcultar={onOcultarModalP2V}
                onMostrar={mostrarModalP2V}
                idOperacion={idOperacion}
                habilitarModal3V={HabilitarModalP3V}
                almacenarOperacion={CrearOperacion}
                montoBitCoin={valorCripto}
                soles={cVent}
                bitcoins={multVent}
                cuenta={cuenta}

            />
            <ModalClienteP3V
                onOcultar={onOcultarModalP3V}
                onMostrar={mostrarModalP3V}
                idOperacion={idOperacion}
            />


        </div>
    )
}

export default CompraVenta