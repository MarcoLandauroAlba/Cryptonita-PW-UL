import Footer from "../components/footer.component"
import MenuNavegacion from "../components/menuNavegacion.component"
import OpcionesUsuariosAdmin from "../components/OpcionesUsuariosAdmin.component"
import ListaUsuarios from "../components/ListaUsuarios.component"
import ValidadoCambioUsuario from "../components/ValidadoCambioUsuario.component"

const ClientesPage = () => {

    const ListadodeUsuarios = [
        { numero: 1, id: "arnodorian020", nombre: "Jose Borgoña", dni: 10698536, correo: "jose.borgona@gmail.com", numerotelf: 954785636, estado: "pendiente de validación" },
        { numero: 2, id: "toppiOrg", nombre: "Mathias Almeida", dni: 17498635, correo: "mathi.almeida@gmail.com", numerotelf: 987563374, estado: "validado" },
        { numero: 3, id: "reseAlm", nombre: "Jack Newton", dni: 15698236, correo: "jack.newton@gmail.com", numerotelf: 978632145, estado: "pendiente de validación" }
    ]

    return <div>
        <MenuNavegacion/>
        <OpcionesUsuariosAdmin/>
        <ListaUsuarios lista={ListadodeUsuarios}></ListaUsuarios>
        <ValidadoCambioUsuario/>
        <Footer/>
    </div>

}

export default ClientesPage