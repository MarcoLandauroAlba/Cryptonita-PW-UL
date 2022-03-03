import { useState } from "react"
/*
props Utilizados:
- tipoDeCliente: Solo renderiza en pantalla si es un cliente de tipo administrador (SEGURIDAD)
- buscarOperaciones: Sirve para poder buscar operaciones por medio de caracteristicas definidas en los inputs
*/
const OpcionesOperacionesAdmin = (props) => {

    const [datosIdCliente, setDatosIdCliente] = useState()

    // DEVUELVE LA CANTIDAD DE BITCOINS UTILIZADA EN LAS LISTAS MOSTRADAS
    const sumaMontos = () => {
        const suma = 0
        for (let ope of props.lista){
            suma += ope.monto_btc
        }
        return suma
    }

    const setDatosOnChangeIdCliente = (event) => {
        setDatosIdCliente(event.target.value)
    }

    if (props.tipoDeCliente == 1) {                     // SOLO SE PODRA MOSTRAR ESTE CONTENIDO SI ES TIPO DE USUARIO ADMINISTRADOR (tipoDeCliente = 1)
        return (
            <div className="row my-4">
                <div className="col-md-1"></div>
                <div className="col-md-10 row">
                    <div className="col-md-6">
                        <div className="d-flex">
                            <h5 className="mx-2" >
                                Monto total operado en BitCoins:  ฿.
                                {(()=>{
                                    return sumaMontos()
                                })()}
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <label className="mx-2 h5" >Filtrar por id de cliente:</label>
                            <div className="d-flex justify-content-end">
                                <input
                                    className="mx-2"
                                    type="number"
                                    name="primero"
                                    placeholder="12345678"
                                    onChange={setDatosOnChangeIdCliente}
                                    defaultValue={datosIdCliente}
                                />
                                <button
                                    type="button"
                                    className="mx-2 btn btn-primary"
                                    onClick={() => { props.buscarOperaciones(datosIdCliente, 'IDCLIENTE') }}>
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        )


    } else {
        return <></>
    }
}

export default OpcionesOperacionesAdmin