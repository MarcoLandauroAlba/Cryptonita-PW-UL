import CompraVenta from "../components/compraVenta.component"
import ConfirmacionRecepcionSoles from "../components/ConfirmacionRecepcionSoles.components"
import Footer from "../components/footer.component"
import MenuNavegacion from "../components/menuNavegacion.component"
function compraVenta() {
    return ( <div>
        <MenuNavegacion/>
        <CompraVenta/>
        <Footer/>
    </div>
    )
}

export default compraVenta