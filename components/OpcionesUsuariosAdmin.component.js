const OpcionesUsuariosAdmin = () => {
    return <div className="row mt-4">
        <div className="col-md-4"></div>
        <div className="col-md-8">
            <p>Filtrar Usuarios
                &nbsp;
                <input type="text" placeholder="Texto a filtrar"></input>
                &nbsp;
                <button type="button" className="btn btn-primary">Buscar</button>
            </p>
        </div>
    </div>
}

export default OpcionesUsuariosAdmin