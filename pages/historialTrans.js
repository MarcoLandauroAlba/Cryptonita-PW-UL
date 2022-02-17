import Footer from "../components/footer.component"
import MenuNavegacion from "../components/menuNavegacion.component"

function historialTrans() {
    return ( <div className="">
        <MenuNavegacion/> <br/>
        <div >
            <div className="card text-center"> <br/>
                <div> 
                    <a href="#" class="btn btn-primary btn-small col-md-3">Compra</a>
                    <a href="#" class="btn btn-primary btn-small col-md-3">Venta</a>
                    <a href="#" class="btn btn-primary disabled btn-small col-md-4">Ver historial</a>
                </div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Fecha y hora</th>
                        <th>Tipo Operacion</th>
                        <th>Tipo Cambio</th>
                        <th>Monto Bitcoin</th>
                    </tr>
                    <tr>
                        <td>789987</td>
                        <td>10/12/2021 21:39</td>
                        <td>Compra</td>
                        <td>1BTC = s/190,987</td>
                        <td>0.02 BTC</td>
                    </tr>
                    <tr>
                        <td>777798</td>
                        <td>10/1/2022 11:20</td>
                        <td>Venta</td>
                        <td>1BTC = s/163,789</td>
                        <td>1.35 BTC</td>
                    </tr>
                    <tr>
                        <td>776891</td>
                        <td>12/1/2022 16:32</td>
                        <td>Venta</td>
                        <td>1BTC = s/164,889</td>
                        <td>0.378 BTC</td>
                    </tr>
                    <tr>
                        <td>781237</td>
                        <td>10/2/2022 21:55</td>
                        <td>Compra</td>
                        <td>1BTC = s/165,123</td>
                        <td>0.213 BTC</td>
                    </tr>
                </table>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default historialTrans