export default function FormularioProcesoRegistro1() {
    return <div><h3>Paso 1 de 2</h3>
        <form className="mt-4">
            <div className="row">
                <div className="col">
                    <label>Nombres:</label>
                </div>
                <div className="col">
                    <input type="text"></input>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <label>Apellidos:</label>
                </div>
                <div className="col">
                    <input type="text"></input>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <label>DNI:</label>
                </div>
                <div className="col">
                    <input type="text"></input>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary" type="button">Siguiente</button>
                    </div>
                </div>
                <div className="col">
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary lg" type="button">Regresar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
}