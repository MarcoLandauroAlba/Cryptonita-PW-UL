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
                    <h5 className="card-tittle">Precio Compra BTC</h5> <br />
                    <div className="card">
                    {
                    (() => {
                        return "$"+props.valor + " = 1 BTC" 
                    })()
                    }  
                    </div><br />
                    <h5 className="card-tittle">Precio Venta BTC</h5> <br />
                    <div className="card">
                    {
                    (() => {
                        return "1 BTC ="+ "$"+ (parseFloat(props.valor)*(1+0.005)) 
                    })()
                    }  
                    </div> <br/>
                    *Los precios se actualizan cada 30s  
                    <button className="btn btn-primary md-2"> Realizar Compra</button><br/>
                    <button className="btn btn-primary md-2"> Realizar Venta</button>
                    <br/>
                </div>
            </div>
        </div>)
}
export default CompCompraVenta