/*
props Utilizados:
- tipoDeCliente: Solo renderiza en pantalla si es un cliente de tipo administrador (SEGURIDAD)
- lista: Lleva la lista de usuarios que cumplen con los requerimientos enviados
*/
export default function ListaUsuarios(props) {


    if (props.tipoDeCliente == 1) {
        return <div>
            <h3>Listado de Usuarios</h3>
            <div className="table-responsive">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>ID</th>
                            <th>Nombre Completo</th>
                            <th>DNI</th>
                            <th>Correo Electrónico</th>
                            <th>Número Teléfonico</th>
                            <th>Estado</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.lista.map((usuario) => {
                                return <tr key={usuario.id}>
                                    <td>{usuario.numero}</td>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.dni}</td>
                                    <td>{usuario.correo}</td>
                                    <td>{usuario.numerotelf}</td>
                                    <td>{usuario.estado}</td>
                                    <td><button type="button" className="btn btn-link" onClick={ ()=>{
                                        props.onEditar()
                                    } }>Modificar</button>
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