import MenuNavegacion from '../components/menuNavegacion.component'
import Footer from '../components/footer.component'
import Carrusel from "../components/carrusel.component"
import MenuNavegacionusuarioregistrado from '../components/menuNavegacionClienteRegistrado.component'
import { useEffect, useState } from 'react'
import MenuNavegacionadminregistrado from '../components/menuNavegacionAdminRegistrado.component'
export default function Home() {
    // SI USUARIO NO ESTA LOGEADO
    const [tipoUsuario, setTipoUsuario] = useState("NoLog")
    // tipos de usuarios:
        //  NoLog -> No logeado
        //  LoggedNC -> Usuario logeado no confirmado
        //  LoggedC -> Usuario logeado confirmado
        //  Admin

    if(tipoUsuario=="NoLog"){
        return (
            <div>
                <MenuNavegacion/>
                <Carrusel />
                <Footer />
            </div>
        )
    }else if(tipoUsuario=="LoggedNC"){
        return (
            <div>
                <MenuNavegacionusuarioregistrado/>
                <Carrusel />
                <Footer />
            </div>
        )
    }else if(tipoUsuario=="LoggedC"){
        return (
            <div>
                <MenuNavegacionadminregistrado />
                <Carrusel />
                <Footer />
            </div>
        )
    }else if(tipoUsuario=="Admin"){
        return (
            <div>
                <MenuNavegacionLogConf />
                <Carrusel />
                <Footer />
            </div>
        )
    }
    
    
}