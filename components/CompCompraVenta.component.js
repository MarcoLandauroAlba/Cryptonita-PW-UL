import { useState } from 'react'

const CompCompraVenta = (props) => {
    const [cComp, setCComp] = useState()
    const [cVent, setCVent] = useState()
    //const[calcC,setCalcC]= useState()

    const setCCompOnChange = (event) => {
        setCComp((() => {
            if (event.target.value == undefined || event.target.value == null || Number.isNaN(event.target.value) || event.target.value == "") {
                return 0
            } else {
                props.establecerMultComp(parseFloat(event.target.value))
                return parseFloat(event.target.value)
            }
        })())
    }
    const setCVentOnChange = (event) => {
        setCVent((() => {
            if (event.target.value == undefined || event.target.value == null || Number.isNaN(event.target.value) || event.target.value == "") {
                return 0
            } else {
                props.establecerMultVent(parseFloat(event.target.value))
                return parseFloat(event.target.value)
            }
        })())
    }
    return (
        <div className="row my-4">

            <div className="col-md-6 my-4">
                <div className="card text-center">
                    <h5 className="card-tittle my-2">Precio Compra BTC</h5>
                    <div className="card-subtitle my-2">
                        {(() => {
                            return "S/." + ((parseFloat(props.valor)) * 3.75).toFixed(4) + " = 1 BTC"
                        })()}
                    </div>
                    <form className="card-text my-2">
                        Ingrese cantidad de BTC a comprar para realizar el calculo:
                        <input type="number" className="form-control mt-2" id="pCompra" defaultValue={cComp} onChange={setCCompOnChange} />
                        {(() => {
                            return <input type="text" className="form-control mt-2" id="calcCompra" defaultValue={"S/." + parseFloat((() => {
                                console.log('cComp', cComp)
                                if (cComp == null || cComp == undefined) {
                                    return 0
                                } else {
                                    props.establecerCComp(parseFloat(cComp) * ((parseFloat(props.valor)) * 3.75).toFixed(4))
                                    return cComp
                                }
                            })()) * ((parseFloat(props.valor)) * 3.75).toFixed(4)} disabled />
                        })()}
                    </form>
                </div>
                <div className="d-grid gap-2 mb-4 mt-2">
                    <button className="btn btn-primary" onClick={props.habilitarModal1C}> Realizar Compra</button>
                </div>
            </div>

            <div className="col-md-6 my-4">
                <div className="card text-center">
                    <h5 className="card-tittle my-2">Precio Venta BTC</h5>
                    <div className="card-subtitle my-2">
                        {(() => {
                            return "1 BTC =" + "S/." + (parseFloat(props.valor) * 3.75).toFixed(4)
                        })()}
                    </div>
                    <form className="card-text my-2">
                        Ingrese cantidad de BTC a vender para realizar el calculo:
                        <input type="number" className="form-control mt-2" id="pCompra" defaultValue={cVent} onChange={setCVentOnChange} />
                        {(() => {
                            return <input type="text" className="form-control mt-2" id="calcCompra" defaultValue={"S/." + parseFloat((() => {
                                console.log('cVent', cVent)
                                if (cVent == null || cVent == undefined) {
                                    return 0
                                } else {
                                    props.establecerCVent(parseFloat(cVent) * ((parseFloat(props.valor)) * 3.75).toFixed(4))
                                    return cVent
                                }
                            })()) * (parseFloat(props.valor) * 3.75).toFixed(4)} disabled />
                        })()}
                    </form>
                </div>
                <div className="d-grid gap-2 mb-4 mt-2">
                    <button className="btn btn-primary" onClick={props.habilitarModal1V}> Realizar Venta</button>
                </div>
            </div>

            <div className="text-center my-2">
                *Los precios son referenciales porque se actualizan cada 30s
            </div>
            <div className="text-center my-2">
                *El tipo de cambio utilizado es $1 = S/.3.75
            </div>
        </div>
    )
}
export default CompCompraVenta