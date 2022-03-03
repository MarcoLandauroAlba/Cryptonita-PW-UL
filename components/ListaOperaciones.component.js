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
                                    <td className='text-center'><button type="button" className="btn btn-link" onClick={ ()=>{
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