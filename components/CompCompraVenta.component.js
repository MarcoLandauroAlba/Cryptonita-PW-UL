const CompCompraVenta = () => {
    return (
        <div className="row">
            <div className='col-md-8 mt-4'>
                <img src="https://s3.cointelegraph.com/storage/uploads/view/2b4e41acdf8af30e3dc4a429868bbb3c.png" className="img-fluid" width={750}></img>
            </div>
            <div className="col-md-4 mt-4">
                <div className="card text-center"> <br />
                    <div>
                        <a href="#" class="m-1 btn btn-primary disabled btn-small col-md-3">Compra</a>
                        <a href="#" class="m-1 btn btn-primary btn-small col-md-3">Venta</a>
                        <a href="/historialTrans" class="m-1 btn btn-primary btn-small col-md-4">Ver historial</a>
                    </div>
                    <h5 className="card-tittle">Compra</h5> <br />
                    <div className="card">1BTC</div><br />
                    <h5 className="card-tittle">Venta</h5><br />
                    <div className="card">s/167,433 </div> <br />
                    <button className="btn btn-primary"> Confirmar transaccion</button> <br />
                </div>
            </div>
        </div>)
}
export default CompCompraVenta