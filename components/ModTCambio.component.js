/*
props Utilizados:
- tipoDeCliente: Solo renderiza en pantalla si es un cliente de tipo administrador (SEGURIDAD)
- lista: Lleva la lista de usuarios que cumplen con los requerimientos enviados
*/
export default function ModTCambio(props) {

    if (props.tipoDeCliente == 1) {
        return <div className="row">
            <h3>Modificar tipo de cambio</h3>
            <div className="col-md-4 mt-4">
                <div className="card text-center"> <br />
                  <h5 className="card-tittle">Valor Precio Compra </h5> <br/>
                  <div className="card-body">
                        <label htmlFor='tCambioCompra' className="mt-2">1 BTC se compra a:</label>
                        <input type="text" className="form-control" id="tCambioCompra"/> <br/>
                  </div>
                </div>
            </div>
            <div className="col-md-4 mt-4">
                <div className="card text-center"> <br />
                  <h6 className="card-tittle"> Modificar porcentaje de variacion entre compra y venta </h6> <br/>
                  <div className="card-body">
                        <label htmlFor='variacionTCambio' className="mt-2">Ingresar porcentaje de variacion:</label>
                        <input type="text" className="form-control" id="variacionTCambio"/> <br/>
                        <button className="btn btn-primary" >ACTUALIZAR</button>
                  </div>
                </div>
            </div>
            <div className="col-md-4 mt-4">
                <div className="card text-center"> <br />
                  <h5 className="card-tittle">Valor Precio Venta </h5> <br/>
                  <div className="card-body">
                        <label htmlFor='tCambioVenta' className="mt-2">1 BTC se vende a:</label>
                        <input type="text" className="form-control" id="tCambioVenta"/> <br/>
                  </div>
                </div>
            </div>
           </div>
    }else{
        return <div className="h1 text-center text-danger">
            Usted no tiene permiso de estar en esta pagina
        </div>
    }
}