const MenuNavegacionadminregistrado = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/AdminRegistrado">Cryptonita</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/ClientesPage">Clientes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/procesoRegistro1">Tipo de Cambio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Operaciones</a>
                        </li>
                        <li>
                            <button type="button" className="btn btn-danger">Cerrar Sesión</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MenuNavegacionadminregistrado