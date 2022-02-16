export default function ListaUsuarios(props) {
    return <div>
        <h3>Listado de Usuarios</h3>
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
                        <button type="button" className="btn btn-link">Modificar</button>
                        <button type="button" className="btn btn-link">Eliminar</button>
                    </tr>
                })
            }
        </table>
    </div>
}