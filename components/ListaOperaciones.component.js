export default function ListaOperaciones(props) {
    return <div>
        <h3>Listado de Operaciones</h3>
        <div className="table-responsive">
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Número</th>
                        <th>ID</th>
                        <th>Fecha y Hora</th>
                        <th>Cliente</th>
                        <th>Tipo de Operación</th>
                        <th>Tipo de Cambio</th>
                        <th>Monto en Bitcoins</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                {
                    props.lista.map((operacion) => {
                        return <tr key={operacion.id}>
                            <td>{operacion.numero}</td>
                            <td>{operacion.id}</td>
                            <td>{operacion.fecha}</td>
                            <td>{operacion.cliente}</td>
                            <td>{operacion.tipoOperacion}</td>
                            <td>{operacion.tipoCambio}</td>
                            <td>{operacion.monto}</td>
                            <button type="button" className="btn btn-link">Modificar</button>
                            <button type="button" className="btn btn-link">Eliminar</button>
                        </tr>
                    })
                }
            </table>
        </div>
    </div>
}