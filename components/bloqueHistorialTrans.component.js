export default function bloqueHistorialTrans (props) {
    return <div>
            <h3 className="mt-3">Listado de Operaciones</h3>
            <div className="table-responsive">
                <table className="table mt-4">
                    <thead>
                        <tr className='align-middle'>
                            <th className="text-center">ID</th>
                            <th className="text-center">ID Cliente</th>
                            <th className="text-center">Tipo</th>
                            <th className="text-center">Compra de BTC</th>
                            <th className="text-center">Venta de BTC</th>
                            <th className="text-center">Monto soles</th>
                            <th className="text-center">Monto BTC</th>
                            <th className="text-center">Billetera</th>
                            <th className="text-center">Cuenta BCP</th>
                            <th className="text-center">Fecha</th>
                            <th className="text-center">Estado</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            props.lista.map((operacion) => {
                                return <tr className='align-middle' key={operacion.id}>
                                    {
                                        console.log(operacion)
                                    }
                                    <td className="text-center">{operacion.id}</td>
                                    <td className="text-center">{operacion.id_cliente}</td>
                                    <td className="text-center">{operacion.tipo}</td>
                                    <td className="text-center">{operacion.comprabtc}</td>
                                    <td className="text-center">{operacion.ventabtc}</td>
                                    <td className="text-center">{operacion.monto_soles}</td>
                                    <td className="text-center">{operacion.monto_btc}</td>
                                    <td className="text-center">{operacion.billetera}</td>
                                    <td className="text-center">{operacion.cuentabanco}</td>
                                    <td className="text-center">{operacion.createdAt}</td>
                                    <td className="text-center">{operacion.estado}</td> 
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
}