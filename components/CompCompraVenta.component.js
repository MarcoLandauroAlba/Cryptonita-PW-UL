import { Image } from "react-bootstrap"

const CompCompraVenta = (props) => {
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
                    </div>
                    <h5 className="card-tittle">Precio Compra BTC*</h5> <br />
                    <div className="card">
                    {
                    (() => {
                        return props.valor + " = 1 BTC" 
                    })()
                    }  
                    </div><br />
                    *Los precios se actualizan cada minuto  
                    <button className="btn btn-primary"> Iniciar transaccion</button> <br />
                </div>
            </div>
        </div>)
}
export default CompCompraVenta