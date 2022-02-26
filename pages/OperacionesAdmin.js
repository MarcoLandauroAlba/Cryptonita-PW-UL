import MenuNavegacionadminregistrado from "../components/menuNavegacionAdminRegistrado.component"
import Footer from "../components/footer.component"
import ListaOperaciones from "../components/ListaOperaciones.component"
import ValidadoCambioOperaciones from "../components/ValidadoCambioOperaciones.component"

const OperacionesAdminPage = () => {
    const ListadodeOperaciones = [
        { numero : 1, id : "arnodorian020", fecha : "10/01/2022 16:54", cliente : "Jose Lavarte", tipoOperacion : "Compra", tipoCambio : 167124.42, monto : 3 },
        { numero : 2, id : "ardTreat", fecha : "20/01/2022 08:40", cliente : "Juan Quintero", tipoOperacion : "Venta", tipoCambio : 167124.42, monto : 4 },
        { numero : 3, id : "reseAlm", fecha : "16/02/2021 09:34", cliente : "Pedro Malaver", tipoOperacion : "Compra", tipoCambio : 167124.42, monto : 8 }
    ]

    return <div>
        <MenuNavegacionadminregistrado />
        <ListaOperaciones lista={ListadodeOperaciones}/>
        <ValidadoCambioOperaciones />
        <Footer/>
    </div>
}

export default OperacionesAdminPage