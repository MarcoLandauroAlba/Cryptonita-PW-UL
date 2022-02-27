import Footer from "../components/footer.component"
import OpcionesUsuariosAdmin from "../components/OpcionesUsuariosAdmin.component"
import ListaUsuarios from "../components/ListaUsuarios.component"
import ValidadoCambioUsuario from "../components/ValidadoCambioUsuario.component"
import MenuNavegacion from "../components/menuNavegacion.component"
import ModalClientes from "../components/modalClientes.component"
import { useEffect, useState } from 'react'

const ClientesPage = () => {

    // INICIO: EL CODIGO ESCRITO DESDE AQUI HASTA LA SIGUIENTE SEÑAL, SERA COPIADO EN TODAS LAS PANTALLAS, LO QUE SE QUIERA AGREGAR, QUE SEA ABAJO =================================
    // const formatoCliente = {datos: ['id-persona','id-cliente','nombre','apellido']}

    //Cliente es utilizado para guardar los datos mas importantes del usuario loggeado al momento
    const [cliente, setCliente] = useState(123)
    //Tipo de cliente es para saber el tipo (de 4 opciones) de cliente loggeado al momento
    const [tipoDeCliente, setTipoDeCliente] = useState(4)

    useEffect(() => {
        console.log('RECARGO')
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

        // Actualizan las listas de usuarios existentes
        setListaUsuarios([
            { numero: 1, id: "arnodorian020", nombre: "Jose Borgoña", dni: 10698536, correo: "jose.borgona@gmail.com", numerotelf: 954785636, estado: "pendiente de validación" },
            { numero: 2, id: "toppiOrg", nombre: "Mathias Almeida", dni: 17498635, correo: "mathi.almeida@gmail.com", numerotelf: 987563374, estado: "validado" },
            { numero: 3, id: "reseAlm", nombre: "Jack Newton", dni: 15698236, correo: "jack.newton@gmail.com", numerotelf: 978632145, estado: "pendiente de validación" }
        ])
    }, [cliente,tipoDeCliente])

    // Props: redireccionamiento    => Mantiene el tipo de usuario actual
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
            if (pagina == '/ClientesPage') {                                                // ACTUALIZAR A LA DIRECCION ACTUAL
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
                lista.push('/ClientesPage')                                                 // ACTUALIZAR A LA DIRECCION ACTUAL
            } else {
                lista.push('/ClientesPage')                                                 // ACTUALIZAR A LA DIRECCION ACTUAL
            }
        } else {
            lista.push('/ClientesPage')                                                     // ACTUALIZAR A LA DIRECCION ACTUAL
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





    const [listaUsuarios,setListaUsuarios] = useState([])

    const buscarUsuarios = (datos,boton) => {
        //IMPLEMENTAR LA BUSQUEDA EN BASE DE DATOS:
        console.log('datos => ',datos)
        console.log('boton => ',boton)
        // TODO: FALTA BASE DE DATOS PARA IMPLEMENTAR FUNCIONALIDAD A LOS BOTONES

        setListaUsuarios([
            { numero: 4, id: "arnodorian020", nombre: "Jose Borgoña", dni: 10698536, correo: "jose.borgona@gmail.com", numerotelf: 954785636, estado: "pendiente de validación" },
            { numero: 5, id: "toppiOrg", nombre: "Mathias Almeida", dni: 17498635, correo: "mathi.almeida@gmail.com", numerotelf: 987563374, estado: "validado" },
            { numero: 6, id: "reseAlm", nombre: "Jack Newton", dni: 15698236, correo: "jack.newton@gmail.com", numerotelf: 978632145, estado: "pendiente de validación" }
        ])
    }

    // codigo de ejemplo 
    // const ListadodeUsuarios = [
    //     { numero: 1, id: "arnodorian020", nombre: "Jose Borgoña", dni: 10698536, correo: "jose.borgona@gmail.com", numerotelf: 954785636, estado: "pendiente de validación" },
    //     { numero: 2, id: "toppiOrg", nombre: "Mathias Almeida", dni: 17498635, correo: "mathi.almeida@gmail.com", numerotelf: 987563374, estado: "validado" },
    //     { numero: 3, id: "reseAlm", nombre: "Jack Newton", dni: 15698236, correo: "jack.newton@gmail.com", numerotelf: 978632145, estado: "pendiente de validación" }
    // ]

    // SE HAN AGREGADO LINEAS DE CODIGO EN EL USEEFFECT

    const [seDebeMostrarModal, setSeDebeMostrarModal] = useState(false)


    const ocultar = () => {
        setSeDebeMostrarModal(false)
    }

    const editarClienteHandler = () => {
        setSeDebeMostrarModal(true)
    }

    return <div>
        <MenuNavegacion
            tipoDeCliente={tipoDeCliente}
            redireccionamiento={RedirigirAOtraPagina}
            salir={TerminarSesionActiva}
            ubicacion={'ClientesPage'}
        />
        <OpcionesUsuariosAdmin 
            tipoDeCliente={tipoDeCliente}               /*SEGURIDAD*/
            buscarUsuarios={buscarUsuarios}
        />
        <ListaUsuarios 
            tipoDeCliente={tipoDeCliente}               /*SEGURIDAD*/
            lista={listaUsuarios} 
            onEditar={ editarClienteHandler }
        />
        <ValidadoCambioUsuario 
            tipoDeCliente={tipoDeCliente}               /*SEGURIDAD*/
        />
        <Footer 
            redireccionamiento={RedirigirAOtraPagina}
        />
        <ModalClientes 
            onOcultar={ ocultar } 
            onMostrar={ seDebeMostrarModal }
        />
    </div>

}

export default ClientesPage