import Footer from "../components/footer.component"
import MenuNavegacion from "../components/menuNavegacion.component"
import BloqueNosotros from "../components/bloqueNosotros.component"
import { useEffect, useState } from 'react'

function Nosotros() {

    // INICIO: EL CODIGO ESCRITO DESDE AQUI HASTA LA SIGUIENTE SEÑAL, SERA COPIADO EN TODAS LAS PANTALLAS, LO QUE SE QUIERA AGREGAR, QUE SEA ABAJO =================================
    // const formatoCliente = {datos: ['id-persona','id-cliente','nombre','apellido']}

    //Cliente es utilizado para guardar los datos mas importantes del usuario loggeado al momento
    const [cliente, setCliente] = useState(-1)
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
    const RedirigirAOtraPagina = (direccion) => {
        GuardarPaginaAnterior()
        localStorage.setItem('cliente', cliente)
        localStorage.setItem('tipoCliente', tipoDeCliente)
        location.href = direccion
    }

    // Props: salir                 => Elimina los datos del usuario actual
    const TerminarSesionActiva = () => {
        GuardarPaginaAnterior()
        localStorage.setItem('cliente', -1)
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
            if (pagina == '/Nosotros') {                                        // ACTUALIZAR A LA DIRECCION ACTUAL
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
                lista.push('/Nosotros')                                         // ACTUALIZAR A LA DIRECCION ACTUAL
            } else {
                lista.push('/Nosotros')                                         // ACTUALIZAR A LA DIRECCION ACTUAL
            }
        } else {
            lista.push('/Nosotros')                                             // ACTUALIZAR A LA DIRECCION ACTUAL
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





    return (
        <div>
            <MenuNavegacion
                tipoDeCliente={tipoDeCliente}
                redireccionamiento={RedirigirAOtraPagina}
                salir={TerminarSesionActiva}
                ubicacion={'nosotros'}
            />
            <BloqueNosotros
                volver={VolverAPaginaAnterior}
            />
            <Footer
                redireccionamiento={RedirigirAOtraPagina}
            />
        </div>)
}

export default Nosotros