import Footer from "../components/footer.component";
import MenuNavegacion from "../components/menuNavegacion.component";
import FormularioIniciarSesion from "../components/FormularioIniciarSesion.component";
import { useEffect, useState } from 'react'

export default function IniciarSesionPage() {

    // INICIO: EL CODIGO ESCRITO DESDE AQUI HASTA LA SIGUIENTE SEÑAL, SERA COPIADO EN TODAS LAS PANTALLAS, LO QUE SE QUIERA AGREGAR, QUE SEA ABAJO =================================
    // const formatoCliente = {datos: ['id-persona','id-cliente','nombre','apellido']}

    //Cliente es utilizado para guardar los datos mas importantes del usuario loggeado al momento
    const [cliente, setCliente] = useState({ datos: ['id-persona', 'id-cliente', 'nombre', 'apellido'] })
    //Tipo de cliente es para saber el tipo (de 4 opciones) de cliente loggeado al momento
    const [tipoDeCliente, setTipoDeCliente] = useState(4)

    useEffect(() => {
        // Si se ingresa al if, normalmente es cuando recien se ingresa por primera vez a la pagina desde un navegador
        if (localStorage.getItem('cliente') == null) {
            localStorage.setItem('cliente', JSON.stringify({ datos: ['id-persona', 'id-cliente', 'nombre', 'apellido'] }))
        }
        // Si se ingresa al if, normalmente es cuando recien se ingresa por primera vez a la pagina desde un navegador
        if (localStorage.getItem('tipoCliente') == null) {
            localStorage.setItem('tipoCliente', 4)
        }
        //se actualizan los valores de las variables de estado con lo guardado en el localStorage
        setCliente(JSON.parse(localStorage.getItem('cliente')))
        setTipoDeCliente(parseInt(localStorage.getItem('tipoCliente')))
    }, [])

    // Props: redireccionamiento    => Mantiene el tipo de usuario actual
    const RedirigirAOtraPagina = (direccion) => {
        GuardarPaginaAnterior()
        localStorage.setItem('cliente', JSON.stringify(cliente))
        localStorage.setItem('tipoCliente', tipoDeCliente)
        location.href = direccion
    }

    // Props: salir                 => Elimina los datos del usuario actual
    const TerminarSesionActiva = () => {
        GuardarPaginaAnterior()
        localStorage.setItem('cliente', JSON.stringify({ datos: ['id-persona', 'id-cliente', 'nombre', 'apellido'] }))
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
            if (pagina == '/IniciarSesion') {                                                // ACTUALIZAR A LA DIRECCION ACTUAL
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
                lista.push('/IniciarSesion')                                                 // ACTUALIZAR A LA DIRECCION ACTUAL
            } else {
                lista.push('/IniciarSesion')                                                 // ACTUALIZAR A LA DIRECCION ACTUAL
            }
        } else {
            lista.push('/IniciarSesion')                                                     // ACTUALIZAR A LA DIRECCION ACTUAL
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




    const [contrasenaIncorrecta,setContrasenaIncorrecta] = useState(false)
    const [correoInexistente,setCorreoInexistente] = useState(false)

    const ValidarUsuario = (correo,contrasena) => {
        // TODO: REALIZAR LO SIGUIENTE CUANDO LA BASE DE DATOS ESTE LISTA
        // SE HACE UNA PRIMERA LLAMADA A BASE DE DATOS PREGUNTANDO POR EL CORREO,

        //SI EL CORREO EXISTE, SE PROCEDE A PREGUNTAR POR LA CONTRASENA

            //SE HACE UNA SEGUNDA LLAMADA A BASE DE DATOS PREGUNTANDO POR EL CORREO Y LA CONTRAASENA

            //SI CORREO Y CONTRASENA COINCIDEN, SE ENVIA AL USUARIO A LA SIGUIENTE PANTALLA
            
                //SE GUARDAN LOS DATOS MAS IMPORTANTES DEL USUARIO EN LAS VARIABLES DE ESTADO
                
                    //SI EL CLIENTE ES ADMIN:
                        // setTipoDeCliente(1)
                    //SI EL CLIENTE ES USUARIO CONFIRMADO
                        // setTipoDeCliente(2)
                    //SI EL CLIENTE ES USUARIO NO CONFIRMADO
                        // setTipoDeCliente(3)
                    

                    // SE ACTUALIZAN LOS DATOS DEL USUARIO ACTUAL, PARA PODER UTILIZARLAS LUEGO EN LAS PANTALLAS NECESARIAS
                    const arregloUsuarioActual = { datos: ['id-persona-ingresada', 'id-cliente-ingresada', 'nombre-ingresado', 'apellido-ingresado'] }
                    setCliente(arregloUsuarioActual)

                    // SE ENVIA AL USUARIO A LA PAGINA PRINCIPAL
                    RedirigirAOtraPagina('/')



            //SI CONTRASENA NO COINCIDE, SE CAMBIA EL ESTADO DE CONTRASENAINCORRECTA
            setContrasenaIncorrecta(true)
        //SI EL CORREO NO EXISTEN, SE CAMBIA EL ESTADO DE CORREOINEXISTENTE
        setCorreoInexistente(true)
    }



    return <div>
        <MenuNavegacion
            tipoDeCliente={tipoDeCliente}
            redireccionamiento={RedirigirAOtraPagina}
            salir={TerminarSesionActiva}
            ubicacion={'IniciarSesion'}
        />
        <FormularioIniciarSesion 
            validarUsuario={ValidarUsuario}
            contrasenaIncorrecta={contrasenaIncorrecta}
            correoInexistente={correoInexistente}
        />
        <Footer 
            redireccionamiento={RedirigirAOtraPagina}
        />
    </div>
}