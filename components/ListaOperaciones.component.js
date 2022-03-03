/*
props Utilizados:
- tipoDeCliente: Solo renderiza en pantalla si es un cliente de tipo administrador (SEGURIDAD)
- lista: Lleva la lista de usuarios que cumplen con los requerimientos enviados
*/
export default function ListaOperaciones(props) {
    if (props.tipoDeCliente == 1) {
        return <div>
            <h3>Listado de Operaciones</h3>
            <button type="button" className="btn btn-success" onClick={ props.onRecargar }>Recargar Lista Original</button>
            <div className="table-responsive">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ID Cliente</th>
                            <th>Tipo</th>
                            <th>Compra de BTC</th>
                            <th>Venta de BTC</th>
                            <th>Monto soles</th>
                            <th>Monto BTC</th>
                            <th>Billetera</th>
                            <th>Cuenta BCP</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.lista.map((operacion) => {
                                return <tr key={operacion.id}>
                                    {
                                        console.log(operacion)
                                    }
                                    <td>{operacion.id}</td>
                                    <td>{operacion.id_cliente}</td>
                                    <td>{operacion.tipo}</td>
                                    <td>{operacion.comprabtc}</td>
                                    <td>{operacion.ventabtc}</td>
                                    <td>{operacion.monto_soles}</td>
                                    <td>{operacion.monto_btc}</td>
                                    <td>{operacion.billetera}</td>
                                    <td>{operacion.cuentabanco}</td>
                                    <td>{operacion.createdAt}</td>
                                    <td>{operacion.estado}</td> 
                                    <td><button type="button" className="btn btn-link" onClick={ ()=>{
                                        props.onEditar(operacion.id)
                                    } }>Modificar</button>
                                    </td>
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