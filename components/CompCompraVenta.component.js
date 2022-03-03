import { Image } from "react-bootstrap"
import { useState } from 'react'

const CompCompraVenta = (props) => {
    const [cComp, setCComp] = useState()
    const [cVent, setCVent] = useState()
    //const[calcC,setCalcC]= useState()

    const setCCompOnChange = (event) => {
        setCComp(parseFloat(event.target.value))
    }
    const setCVentOnChange = (event) => {
        setCVent(parseFloat(event.target.value))
    }
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
                    <h5 className="card-tittle">Precio Compra BTC</h5>
                    <div className="card">
                        {
                            (() => {
                                return "S/." + ((parseFloat(props.valor)) * 3.75).toFixed(4) + " = 1 BTC"
                            })()
                        }

                    </div><br />
                    <div className="card">
                        Ingrese cantidad de BTC a comprar para realizar el calculo:
                        <input type="text" className="form-control mt-2" id="pCompra" defaultValue={cComp} onChange={setCCompOnChange} />
                        <div>
                            {
                                (() => {
                                    return <input type="text" className="form-control mt-2" id="calcCompra" defaultValue={"S/." + parseFloat(cComp) * ((parseFloat(props.valor)) * 3.75).toFixed(4)} />
                                })()
                            }
                        </div>

                    </div><br />
                    <h5 className="card-tittle">Precio Venta BTC</h5>
                    <div className="card">
                        {
                            (() => {
                                return "1 BTC =" + "S/." + (parseFloat(props.valor) * (1 + 0.005) * 3.75).toFixed(4)
                            })()
                        }
                    </div>

                    <br />
                    <div className="card">
                        Ingrese cantidad de BTC a vender para realizar el calculo:
                        <input type="text" className="form-control mt-2" id="pCompra" defaultValue={cVent} onChange={setCVentOnChange} />
                        <div>
                            {
                                (() => {
                                    return <input type="text" className="form-control mt-2" id="calcCompra" defaultValue={"S/." + parseFloat(cVent) * (parseFloat(props.valor) * (1 + 0.005) * 3.75).toFixed(4)} />
                                })()
                            }
                        </div>

                    </div>
                    *Los precios se actualizan cada 30s <br />
                    *El tipo de cambio utilizado es $1 = S/.3.75
                    <button className="btn btn-primary md-2"> Realizar Compra</button><br />
                    <button className="btn btn-primary md-2"> Realizar Venta</button>
                    <br />
                </div>
            </div>
        </div>)
}
export default CompCompraVenta