const HistorialTrans = (props) =>{
    return(<div >
        <div className="card text-center"> <br/>
            <div> 
                <button onClick={() => { props.redireccionamiento('/compraVenta') }} className="btn btn-primary btn-small col-md-3">Volver a Compra/Venta</button>
                <button onClick={()=>{console.log('redirigir aqui')}}  className="btn btn-primary disabled btn-small col-md-4">Ver historial</button>
            </div>
            <div className="table-responsive">
                <table className="table mx-2">
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>ID</th>
                            <th>Fecha y Hora</th>
                            <th>Cliente</th>
                            <th>Tipo de Operación</th>
                            <th>Tipo de Cambio</th>
                            <th>Estado</th>
                            <th>Monto en Bitcoins</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.lista.map((operacion) => {
                                return <tr key={operacion.id}>
                                    <td>{operacion.numero}</td>
                                    <td>{operacion.id}</td>
                                    <td>{operacion.fecha}</td>
                                    <td>{operacion.cliente}</td>
                                    <td>{operacion.tipoOperacion}</td>
                                    <td>{operacion.tipoCambio}</td>
                                    <td>{operacion.estado}</td>
                                    <td>{operacion.monto}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>

    )
}
export default HistorialTrans