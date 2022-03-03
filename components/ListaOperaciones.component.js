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
                                    <td className='justify-content-center'>{operacion.id}</td>
                                    <td className='justify-content-center'>{operacion.id_cliente}</td>
                                    <td className='justify-content-center'>{operacion.tipo}</td>
                                    <td className='justify-content-center'>{operacion.comprabtc}</td>
                                    <td className='justify-content-center'>{operacion.ventabtc}</td>
                                    <td className='justify-content-center'>{operacion.monto_soles}</td>
                                    <td className='justify-content-center'>{operacion.monto_btc}</td>
                                    <td className='justify-content-center'>{operacion.billetera}</td>
                                    <td className='justify-content-center'>{operacion.cuentabanco}</td>
                                    <td className='justify-content-center'>{operacion.createdAt}</td>
                                    <td className='justify-content-center'>{operacion.estado}</td> 
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