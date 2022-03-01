import Footer from "../components/footer.component"
import FormularioProcesoRegistro2 from "../components/FormularioProcesoRegistro2.component"
import MenuNavegacion from "../components/menuNavegacion.component"
import { useState, useEffect } from "react"
import { obtenerClienteDatosIniciales } from "../dao/cliente_local"


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
    }, [cliente, tipoDeCliente])

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
<<<<<<< HEAD





    //Si el CORREO se repite, se cambia a estado falso
    const [disponible, setDisponible] = useState(true)

    // SE UTILIZAN PARA DETERMINAR SI HAN SIDO RELLENADOS LOS CAMPOS SOLICITADOS
    const [faltaCorreo, setFaltaCorreo] = useState(false)
    const [faltaContraOri, setFaltaContraOri] = useState(false)
    const [faltaContraRep, setFaltaContraRep] = useState(false)
    const [faltaTelefono, setFaltaTelefono] = useState(false)
=======
    
    //Si el CORREO se repite, se cambia a estado falso
    const [disponible, setDisponible] = useState(true)

    const GuardarClienteOnHandler = async (correo, contrasena, telefono) => {
        // TODO: FALTA COMUNICARSE CON EL BACKEND PARA REALIZAR LA CREACION DE DATOS
        const clienteintancia = JSON.parse(localStorage.getItem("fpr1"))
        const nombre = clienteintancia.nombre
        const apellido = clienteintancia.apellido
        const dni = parseInt(clienteintancia.dni)
        //TODO:SE MANDA A ESPERA HASTA QUE UN ADMINISTRADOR PERMITA EL LOGEO DEL CLIENTE
        const estado = false
        const id=3
>>>>>>> origin

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
        const response = await fetch(`/api/clientes/${correo}`)
        const data = await response.json()
        console.log('data',data)
        if(data.cliente==null){
            return false
        }else{
            true
        }
    }

    const GuardarClienteOnHandler = async (correo, contrasenaOriginal, contrasenaRepe, telefono) => {
        // PRIMERO CORROBORAMOS QUE TODOS LOS DATOS SOLICITADOS ESTAN COMPLETOS
        let EfaltaCorreo = true
        let EfaltaContraOri = true
        let EfaltaContraRep = true
        let EfaltaTelefono = true
        let ENodisponible = true

        console.log('validarEmail(correo)',validarEmail(correo))
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
        if(!EfaltaCorreo){
            setDisponible(!await existeCorreoEnBaseDeDatos(correo))
            ENodisponible = false
        }
        
        // SI INGRESA A ESTA CONDICIONAL, SIGNIFICA QUE TODO LO INGRESADO ES VALIDO PARA CREAR UNA CUENTA
        if(!EfaltaCorreo && !EfaltaContraOri && !EfaltaContraRep && !EfaltaTelefono && !ENodisponible ){
            // TODO: FALTA COMUNICARSE CON EL BACKEND PARA REALIZAR LA CREACION DE DATOS
            const clienteintancia = obtenerClienteDatosIniciales()
            const nombre = clienteintancia.nombre
            const apellido = clienteintancia.apellido
            const dni = parseInt(clienteintancia.dni)
            //TODO:SE MANDA A ESPERA HASTA QUE UN ADMINISTRADOR PERMITA EL LOGEO DEL CLIENTE
            const estado = false
    
            const clientePorGuardar = {
                nombre : nombre,
                apellido : apellido,
                dni : dni,
                correo : correo,
                telefono : telefono,
                contrasena : contrasenaOriginal,
                estado : estado
            }
            console.log('cliente12+',clientePorGuardar)
    
            const resp = await fetch("/api/usuarios",{
                method : "POST",
                body : JSON.stringify(clientePorGuardar)   
            })
            const data = await resp.json()
            
            
            //TODO: SE REALIZA LA ELIMINACION DEL CLIENTE EN PRIMERA INSTANCIA EN EL LOCALSTORAGE
            localStorage.removeItem('fpr1')
    
            const tipo = 3
    
            // RedirigirAPaginaPrincipalDeEsperaConLoggeo(id)
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
        GuardarPaginaAnterior()
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
                ubicacion={'procesoRegistro2'}
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