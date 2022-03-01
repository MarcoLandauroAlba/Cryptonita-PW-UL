import Footer from "../components/footer.component"
import FormularioProcesoRegistro2 from "../components/FormularioProcesoRegistro2.component"
import MenuNavegacion from "../components/menuNavegacion.component"
import { useState, useEffect } from "react"


const ProcesoRegistro2Page = () => {

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

        // IMPORTANT: ESTA LINEA DE CODIGO ES AGREGADA PARA DETEMRINAR SI EL PROCESO DE REGISTRO 1 FUE REALIZADO CON EXITO
        confirmarSiPasoAnteriorRealizado()
    }, [cliente,tipoDeCliente])

    // Props: redireccionamiento    => Mantiene el tipo de usuario actual
    const RedirigirAOtraPagina = (direccion) => {
        GuardarPaginaAnterior()
        localStorage.setItem('cliente', 123)
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
            if (pagina == '/procesoRegistro2') {                            // ACTUALIZAR A LA DIRECCION ACTUAL
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
                lista.push('/procesoRegistro2')                             // ACTUALIZAR A LA DIRECCION ACTUAL
            } else {
                lista.push('/procesoRegistro2')                             // ACTUALIZAR A LA DIRECCION ACTUAL
            }
        } else {
            lista.push('/procesoRegistro2')                                 // ACTUALIZAR A LA DIRECCION ACTUAL
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


    const obtenerClientesHTTP = async () => {
        let response = await fetch("/api/usuarios")
        const data = await response.json()
        return data
    }


    //Si el CORREO se repite, se cambia a estado falso
    const [disponible, setDisponible] = useState(true)

    const GuardarClienteOnHandler = async (correo, contrasena, telefono) => {
        // TODO: FALTA COMUNICARSE CON EL BACKEND PARA REALIZAR LA CREACION DE DATOS
        const objeto = JSON.parse(localStorage.getItem("nombreAGuardar"))
        const nombre = objeto.nombre
        const apellido = objeto.apellido
        const dni = parseInt(localStorage.getItem("DniGuardable"))
        const estado = false
        const id = 3

        const cliente = {
            id : id,
            nombre : nombre,
            apellido : apellido,
            dni : dni,
            correo : correo,
            telefono : telefono,
            contraseña : contrasena,
            estado : estado
        }

        const resp = await fetch("/api/usuarios",{
            method : "POST",
            body : JSON.stringify(cliente)   
        })
        const data = await resp.json()

        if(data.msg == ""){
            const dataClientes = await obtenerClientesHTTP()
            const lista = dataClientes.clientes
            localStorage.setItem("clienteNuevo", JSON.stringify(lista))
        }
        // TODO: FALTA CREAR LA LOGICA DE SI ES UNA PERSONA CON EL MISMO CORREO (NO SE PUEDE DUPLICAR)
        //setDisponible(false)

        //TODO: SE REALIZA EL ALMACENAMIENTO DEL CLIENTE
        
        //CODIGO DE ALMACENAMIENTO
        //TODO: SE REALIZA LA ELIMINACION DEL DNI EN EL LOCALSTORAGE
        localStorage.removeItem('DniGuardable')

        //TODO: LOGICA QUE PIDE EN BACKEND CREAR AL NUEVO CLIENTE

        //TODO: PEDIR DE BACKEND EL VALOR DEL ID DEL CLIENTE Y ALMACENAR ABAJO
        // EN ESTA VARIABLE ID, SE GUARDARA EL VALOR DEL ID DEL CLIENTE REGISTRADO
        // EN ESTA VARIABLE TIPO, SE GUARDARA EL VALOR DEL TIPO DE CLIENTE BUSCADO
        // CLIENTE POR CONFIRMAR 3 (NO HABRA MAS OPCIONES)
        const tipo = 3


        
        RedirigirAPaginaPrincipalDeEsperaConLoggeo(id,tipo)

    }

    const [procede, setProcede] = useState(true)

    const confirmarSiPasoAnteriorRealizado = () => {
        if(localStorage.getItem('DniGuardable')!=null){
            setProcede(true)
        }else{
            setProcede(false)
        }
    }

    const RedirigirAPaginaPrincipalDeEsperaConLoggeo = (VALORcliente,VALORtipoDeCliente) => {
        GuardarPaginaAnterior()
        localStorage.setItem('cliente', VALORcliente)
        localStorage.setItem('tipoCliente', VALORtipoDeCliente)
        location.href = '/EsperaRegistro'
    }

    return (
        <div>
            <MenuNavegacion
                tipoDeCliente={tipoDeCliente}
                redireccionamiento={RedirigirAOtraPagina}
                salir={TerminarSesionActiva}
                ubicacion={'procesoRegistro2'}
            />
            <FormularioProcesoRegistro2
                guardar={GuardarClienteOnHandler}
                volver={VolverAPaginaAnterior}
                disponible={disponible}
                procede={procede}
            />
            <Footer
                redireccionamiento={RedirigirAOtraPagina}
            />
        </div>)
}
export default ProcesoRegistro2Page