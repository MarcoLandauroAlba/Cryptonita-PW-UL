import Footer from "../components/footer.component"
import MenuNavegacion from "../components/menuNavegacion.component"

function compraVenta() {
    return ( <div className="row">
        <MenuNavegacion/>
        <div className='col-md-8 mt-4'>
            <img src="https://lh3.googleusercontent.com/SdKv6iesIA3AeL7BssN1wRnGXMYzvUbVOH4Otuo0UoTH3dPagiihy18S_2gJrEDq1mXeOS8PMlV9mWXYivF5UXcrUscqkySGKKwyujIX6Koq6SRtQu7i2l5WCfQUDRguLRHT3zT6BXKwzkdRblWLwT8aCOo-TZ2EwdhRuGkiP15NgZn64fAntFJWAPDssyZXvACx9viS0agQlV_XcIjTgA2M7rr2wgTJ9SrU7syJXw3c65jLSlhxkXO1u16YkO_cAI6xsT-cFt5Rk67nqm7jRGZdAqQ9kHyT-h-GDoos44L--9Jb2QFUtInXlonHq2kDTedJ8awttotgMD3OHSIzVKRB0UCT0pqu05T5J1NfbySrQRPOKamKm8OWcIVBQ0JNbfAlAlzvwPIvm03f3yPJvHTMFj1u-nseWI3esLx_pap7cf2y1i4JI-wjt8bEnepyTdCl-Rl--OpTseFQrods0-gvhnsBz7O2RxqreDAEDIMbbBE6F5oeUV8tXW9j5IvvvpS5oWaAWuMJ6Nc_VC3ejL2Jgxc55JDyHqHx-Fy37f19C7pP3_R9pqJEI33qh3ReQrc5SY7XOrCvdxCInuXqtOveK1UpaWUlT00RAgGArbKQk9uaj6ymLsgnVJWQH_xsIDoEoxTxApJxGwswhBdS0d72plD5t9Fabf4wejtvb4SfwrU2AkiFP5vVjM4Uo4NtgYIid7R3I0w0KJRXfTNwa_s=w1111-h620-no?authuser=0" width={750}></img>
        </div>
        <div className="col-md-4 mt-4">
            <div className="card text-center"> <br/>
                <div> 
                    <a href="/compraVenta" class="btn btn-primary btn-small col-md-3">Compra</a>
                    <a href="/compraVenta" class="btn btn-primary btn-small col-md-3">Venta</a>
                    <a href="/historialTrans" class="btn btn-primary btn-small col-md-4">Ver historial</a>
                </div>
                
                <h3 className="mb-4">Exchange</h3>

                <h5 className="card-tittle">BTC</h5> <br/>
                <div className="card"><input type="text" className="form-control"defaultValue={ "1BTC" }></input></div><br/>
                <h5 className="card-tittle">PEN</h5><br/>
                <div className="card"><input type="text" className="form-control" defaultValue={ "S/.167,433" }></input></div><br/>
                <button className="btn btn-primary"> Confirmar transaccion</button> <br/>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default compraVenta