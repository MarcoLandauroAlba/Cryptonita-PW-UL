import { Image } from "react-bootstrap"
const CompCompraVenta = () => {
    return (
        <div className="row">
            <div className='col-md-8 mt-4'>
                <Image
                    alt="..."
                    className="banner"
                    src="https://s3.cointelegraph.com/storage/uploads/view/2b4e41acdf8af30e3dc4a429868bbb3c.png"
                    thumbnail={true}
                />
            </div>
            <div className="col-md-4 mt-4">
                <div className="card text-center"> <br />
                    <div>
                        <button onClick={()=>{console.log('compra')}} className="m-1 btn btn-primary disabled btn-small col-md-3">Compra</button>
                        <button onClick={()=>{console.log('compra')}} className="m-1 btn btn-primary btn-small col-md-3">Venta</button>
                        <button onClick={()=>{console.log('compra')}} className="m-1 btn btn-primary btn-small col-md-4">Ver historial</button>
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