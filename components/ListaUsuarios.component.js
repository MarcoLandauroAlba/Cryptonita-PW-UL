/*
props Utilizados:
- tipoDeCliente: Solo renderiza en pantalla si es un cliente de tipo administrador (SEGURIDAD)
- lista: Lleva la lista de usuarios que cumplen con los requerimientos enviados
*/
export default function ListaUsuarios(props) {
    if (props.tipoDeCliente == 1) {
        return <div>
            <h3>Listado de Usuarios</h3>
            <button type="button" className="btn btn-success" onClick={ props.onRecargar }>Recargar Lista Original</button>
            <div className="table-responsive">
                <table className="table mt-4">
                    <thead>
                        <tr className='align-middle'>
                            <th className="text-center">ID</th>
                            <th className="text-center">Nombres Completos</th>
                            <th className="text-center">DNI</th>
                            <th className="text-center">Correo Electrónico</th>
                            <th className="text-center">Número Teléfonico</th>
                            <th className="text-center">Estado</th>
                            <th className="text-center">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.lista.map((usuario) => {
                                return <tr className='align-middle' key={usuario.id}>
                                    <td className="text-center">{usuario.id}</td>
                                    <td className="text-center">{usuario.nombre + " " + usuario.apellido}</td>
                                    <td className="text-center">{usuario.dni}</td>
                                    <td className="text-center">{usuario.correo}</td>
                                    <td className="text-center">{usuario.telefono}</td>
                                    <td className="text-center">{usuario.estado}</td> 
                                    <td className='text-center'><button type="button" className="btn btn-link" onClick={ ()=>{
                                        props.onEditar(usuario.id)
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