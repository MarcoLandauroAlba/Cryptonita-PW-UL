import Footer from "../components/footer.component";
import MenuNavegacion from "../components/menuNavegacion.component";
import ListaOperaciones from "../components/ListaOperaciones.component"
import ModalModificarOperacion from "../components/modalModificarOperacion.component";
import { useEffect, useState } from 'react'

const OperacionesAdminPage = () => {

    // INICIO: EL CODIGO ESCRITO DESDE AQUI HASTA LA SIGUIENTE SEÑAL, SERA COPIADO EN TODAS LAS PANTALLAS, LO QUE SE QUIERA AGREGAR, QUE SEA ABAJO =================================
    // const formatoCliente = {datos: ['id-persona','id-cliente','nombre','apellido']}

    //Cliente es utilizado para guardar los datos mas importantes del usuario loggeado al momento
    const [cliente, setCliente] = useState(123)
    //Tipo de cliente es para saber el tipo (de 4 opciones) de cliente loggeado al momento
    const [tipoDeCliente, setTipoDeCliente] = useState(4)

    useEffect(() => {
        // Si se ingresa al if, normalmente es cuando recien se ingresa por primera vez a la pagina desde un navegador
        if (localStorage.getItem('cliente') == null) {
            localStorage.setItem('cliente', cliente)
        }
        // Si se ingresa al if, normalmente es cuando recien se ingresa por primera vez a la pagina desde un navegador
        if (localStorage.getItem('tipoCliente') == null) {
            localStorage.setItem('tipoCliente', tipoDeCliente)
        }
        //se actualizan los valores de las variables de estado con lo guardado en el localStorage
        setCliente(parseInt(localStorage.getItem('cliente')))
        setTipoDeCliente(parseInt(localStorage.getItem('tipoCliente')))

        // CODIGO EXTRA !!! SETEO DE DATOS PARA LA LISTA DE OPERACIONES
        buscarListaDeOperacionesEnBD()
    }, [])

    // Props: redireccionamiento    => Mantiene el tipo de usuario actual
    // FUNCION CAMBIADA EXCLUSIVAMENTE PARA ESTA PANTALLA
    const RedirigirAOtraPagina = (direccion) => {
        GuardarPaginaAnterior()
        localStorage.setItem('cliente', cliente)
        localStorage.setItem('tipoCliente', tipoDeCliente)
        location.href = direccion
    }

    // Props: salir                 => Elimina los datos del usuario actual
    const TerminarSesionActiva = () => {
        GuardarPaginaAnterior()
        localStorage.setItem('cliente', 123)
        localStorage.setItem('tipoCliente', 4)
        location.href = '/'
    }

    // TODO: ESTA ES LA UNICA FUNCION A ACTUALIZAR EN TODAS LAS PAGES QUE SE UTILICE
    // NORMALMENTE SERVIRA COMO UN PROPS PARA LOS BOTONES DE "REGRESAR"
    // props: volver
    const VolverAPaginaAnterior = () => {
        if (localStorage.getItem('paginasAnteriores') != null) {
            let lista = JSON.parse(localStorage.getItem('paginasAnteriores'))
            let pagina = lista.pop()
            if (pagina == '/OperacionesAdmin') {                                                // ACTUALIZAR A LA DIRECCION ACTUAL
                let pagina = lista.pop()
            }
            localStorage.setItem('paginasAnteriores', JSON.stringify(lista))
            location.href = pagina
        } else {
            // No pasa nada
            console.log('No hay pagina anterior')
        }
    }

    // ESTA ES LA UNICA FUNCION A ACTUALIZAR
    const GuardarPaginaAnterior = () => {
        let lista = []
        if (localStorage.getItem('paginasAnteriores') != null) {
            lista = JSON.parse(localStorage.getItem('paginasAnteriores'))
            if (lista.length > 5) {
                lista.shift()
                lista.push('/OperacionesAdmin')                                                 // ACTUALIZAR A LA DIRECCION ACTUAL
            } else {
                lista.push('/OperacionesAdmin')                                                 // ACTUALIZAR A LA DIRECCION ACTUAL
            }
        } else {
            lista.push('/OperacionesAdmin')                                                     // ACTUALIZAR A LA DIRECCION ACTUAL
        }
        localStorage.setItem('paginasAnteriores', JSON.stringify(lista))
        RevisarListaAnteriores()
    }

    // SI HEMOS VISITADO LA MISMA PAGINA DOS VECES (ESTAR EN PANTALLA "NOSOTROS" Y PRESIONAR OTRA VEZ "NOSOTROS")
    // ELIMINA LOS DUPLICADOS
    const RevisarListaAnteriores = () => {
        let lista = JSON.parse(localStorage.getItem('paginasAnteriores'))
        let tamano = lista.length
        let i = 1
        while (i < tamano) {
            if (lista[i - 1] == lista[i]) {
                lista.splice(i, 1)
                tamano--
            } else {
                i++
            }
        }
        localStorage.setItem('paginasAnteriores', JSON.stringify(lista))
    }

    // FIN: EL CODIGO ESCRITO HASTA AQUI, SERA COPIADO EN TODAS LAS PANTALLAS, LO QUE SE QUIERA AGREGAR, QUE SEA ABAJO =================================

    //ESPACIO PARA ESCRIBIR CODIGO EXTRA:




    const [listadoDeOperaciones,setListadoDeOperaciones] = useState([])

    const buscarListaDeOperacionesEnBD = () => {
        
        // TODO: HACER PETICION A BACKEND PARA OBTENER TODAS LAS OPERACIONES REALIZADAS EN EL TRABAJO

        setListadoDeOperaciones([
            { numero : 1, id : "arnodorian020", fecha : "10/01/2022 16:54", cliente : "Jose Lavarte", tipoOperacion : "Compra", tipoCambio : 167124.42, estado:0, monto : 3 },
            { numero : 2, id : "ardTreat", fecha : "20/01/2022 08:40", cliente : "Juan Quintero", tipoOperacion : "Venta", tipoCambio : 167124.42, estado:1, monto : 4 },
            { numero : 3, id : "reseAlm", fecha : "16/02/2021 09:34", cliente : "Pedro Malaver", tipoOperacion : "Compra", tipoCambio : 167124.42, estado:0, monto : 8 }
        ])
    }

    // FALTA REALIZAR LA FUNCION PARA CAMBIAR LOS DATOS DE LAS OPERACIONES Y PASARLO COMO PROPS A ModalModificarOperacion

    const [mostrar,setMostrar] = useState(false)
    const [operacion,setOperacion] = useState({})

    const Actualizar = (operacion) => {
        // CODIGO PARA ACTUALIZAR UNA OPERACION
        console.log(operacion)
        setOperacion(operacion)
        setMostrar(true)
        
    }
    const ocultar = () => {
        setMostrar(false)
    }

    const guardar = (idOperacion,estado) => {
        // CODIGO PARA ACTUALIZAR UNA OPERACION
        console.log(idOperacion)
        console.log(estado)
        // TODO: ENVIAR DATOS ACTUALIZADOS A BASE DE DATOS

        // TODO: ACTUALIZAR VALOR DE LA LISTA DE OPERACIONES PARA QUE RENDERIZE UNA NUEVA LISTA
    }

    return <div>
        <MenuNavegacion
            tipoDeCliente={tipoDeCliente}
            redireccionamiento={RedirigirAOtraPagina}
            salir={TerminarSesionActiva}
            ubicacion={'OperacionesAdmin'}
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
}

export default OperacionesAdminPage