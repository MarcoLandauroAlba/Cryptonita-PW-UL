export default function FormularioIniciarSesion() {
    return <div className="row mt-4">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h3>Login</h3>
                    <form>
                        <label className="mt-2">Correo:</label>
                        <input type="text" className="form-control mt-2"></input>
                        <label className="mt-2">Contraseña:</label>
                        <input type="text" className="form-control mt-2"></input>
                        <a href="/compraVenta"><button type="button" className="btn btn-primary mt-4">Ingresar</button></a>
                    </form>
                </div>
            </div>
        </div>
        <div className="col-md-4"></div>
    </div>
}