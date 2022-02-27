export default function ListaOperaciones(props) {

    const MontoOperado = () => {
        let total = 0
        for (let oper of props.lista){
            total += oper.monto
        }
        return total
    }

    const ModificarOperacion = () => {

    }

    if(props.tipoDeCliente==1){
        return <div>
            <div className="mx-2">
                <h3 className="text-start">Listado de Operaciones</h3>
                <h6 className="text-end mt-1">Monto total de BitCoins operados:
                    {
                        (()=>{
                            return MontoOperado()
                        })()
                    }
                </h6>
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
                                    <td><button type="button" className="btn btn-link" onClick={()=>{
                                        props.actualizar(operacion)
                                    }}>Modificar</button>
                                    <button type="button" className="btn btn-link">Eliminar</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }else{
        return <div className="h1 text-center text-danger">
            Usted no tiene permiso de estar en esta pagina
        </div>
    }
}