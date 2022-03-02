import Footer from "../components/footer.component";
import MenuNavegacion from "../components/menuNavegacion.component";
import FormularioIniciarSesion from "../components/FormularioIniciarSesion.component";
import { useEffect, useState } from 'react'
import { guardarDatosGenerales } from "../dao/cliente_local";

export default function IniciarSesionPage() {

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
    }, [cliente,tipoDeCliente])

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




    // VALIDA SI EL CORREO INGRESADO CUMPLE CON EL FORMATO REQUERIDO PARA EXISTIR

    // SETEAN EL VALOR A POSITIVO SI ES QUE ALGUNO ES INCORRECTO O INEXISTENTE
    const [credencialesIncorrecta,setCredencialesIncorrecta] = useState(false)



    const validarUsuario = async (correo,contrasena) => {

        const usuarioIncompleto = {correo: correo, contraseña: contrasena}

        const responseClientes = await fetch('api/clientes',{
            method: 'OPTIONS',
            body: JSON.stringify(usuarioIncompleto)
        })
        const dataCliente = await responseClientes.json()

        if(dataCliente.cliente!=null){
            if(dataCliente.cliente.estado==true){
                RedirigirAPaginaPrincipalConLogeoRealizado(dataCliente.cliente.id,2)
                redi
            }else{
                RedirigirAPaginaPrincipalConLogeoRealizado(dataCliente.cliente.id,3)
            }
        }else{
            const responseAdmin = await fetch('api/administradores',{
                method: 'OPTIONS',
                body: JSON.stringify(usuarioIncompleto)
            })
            const dataAdministrador = await responseAdmin.json()

            if(dataAdministrador.admin!=null){
                RedirigirAPaginaPrincipalConLogeoRealizado(dataAdministrador.admin.id,1)
            }else{
                setCredencialesIncorrecta(true)
            }
        }
    }
    
    const RedirigirAPaginaPrincipalConLogeoRealizado = (VALORcliente,VALORtipoDeCliente) => {
        GuardarPaginaAnterior()
        guardarDatosGenerales(VALORcliente,VALORtipoDeCliente)
        location.href = '/'
    }



    return <div>
        <MenuNavegacion
            tipoDeCliente={tipoDeCliente}
            redireccionamiento={RedirigirAOtraPagina}
            salir={TerminarSesionActiva}
            ubicacion={'IniciarSesion'}
        />
        <FormularioIniciarSesion 
            validarUsuario={validarUsuario}
            credencialesIncorrectas={credencialesIncorrecta}
        />
        <Footer 
            redireccionamiento={RedirigirAOtraPagina}
        />
    </div>
}