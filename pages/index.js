import MenuNavegacion from '../components/menuNavegacion.component'
import Footer from '../components/footer.component'
import Carrusel from "../components/carrusel.component"
import { useEffect, useState } from 'react'

export default function Home() {

    // const formatoCliente = {datos: ['id-persona','id-cliente','nombre','apellido']}

    const [cliente, setCliente] = useState({ datos: ['id-persona', 'id-cliente', 'nombre', 'apellido'] })
    const [tipoDeCliente, setTipoDeCliente] = useState(4)

    useEffect(() => {
        if (localStorage.getItem('cliente') == null) {
            localStorage.setItem('cliente', JSON.stringify({ datos: ['id-persona', 'id-cliente', 'nombre', 'apellido'] }))
        }
        if (localStorage.getItem('tipoCliente') == null) {
            localStorage.setItem('tipoCliente', 4)
        }
        setCliente(JSON.parse(localStorage.getItem('cliente')))
        setTipoDeCliente(parseInt(localStorage.getItem('tipoCliente')))

        // PRUEBAS
        // console.log(JSON.parse(localStorage.getItem('cliente')))
        // console.log(parseInt(localStorage.getItem('tipoCliente')))
    }, [])



    const RedirigirAOtraPagina = (direccion) => {
        GuardarPaginaAnterior()
        localStorage.setItem('cliente', JSON.stringify(cliente))
        localStorage.setItem('tipoCliente', tipoDeCliente)
        location.href = direccion
    }

    const TerminarSesionActiva = () => {
        GuardarPaginaAnterior()
        location.href = '/'
        localStorage.setItem('cliente', JSON.stringify({ datos: ['id-persona', 'id-cliente', 'nombre', 'apellido'] }))
        localStorage.setItem('tipoCliente', 4)
    }

    // ESTA ES LA UNICA FUNCION A ACTUALIZAR
    const VolverAPaginaAnterior = () => {
        if (localStorage.getItem('paginasAnteriores') != null) {
            let lista = JSON.parse(localStorage.getItem('paginasAnteriores'))
            let pagina = lista.pop()
            if (pagina == '/') {
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
            console.log('primera')
            lista = JSON.parse(localStorage.getItem('paginasAnteriores'))
            if (lista.length > 5) {
                lista.shift()
                lista.push('/')
            } else {
                lista.push('/')
            }
        } else {
            console.log('segunda')
            lista.push('/')
        }
        localStorage.setItem('paginasAnteriores', JSON.stringify(lista))
        RevisarListaAnteriores()
    }

    const RevisarListaAnteriores = () => {
        let lista = JSON.parse(localStorage.getItem('paginasAnteriores'))
        let tamano = lista.length
        let i = 1
        while (i < tamano) {
            if (lista[i - 1] == lista[i]) {
                lista.splice(i, 1)
                console.log('REVISAR LISTA ANTERIORES ELIMINO UNO')
                tamano--
            } else {
                i++
            }
        }
        localStorage.setItem('paginasAnteriores', JSON.stringify(lista))
    }

    // TODAS LAS FNCIONES NUEVAS SE AGREGAN ABAJO


    return (
        <div>
            <MenuNavegacion
                cliente={cliente}
                tipoDeCliente={tipoDeCliente}
                redireccionamiento={RedirigirAOtraPagina}
                salir={TerminarSesionActiva}
                ubicacion={'index'}
            />
            <Carrusel />
            <Footer
                redireccionamiento={RedirigirAOtraPagina}
                ubicacion={'index'}
            />
        </div>
    )

}