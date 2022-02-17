export default function FormularioProcesoRegistro2() {
    return <div><h3>Paso 2 de 2</h3>
        <form className="mt-4">
            <div className="row">
                <div className="col">
                    <label>Correo:</label>
                </div>
                <div className="col">
                    <input type="text"></input>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <label>Contraseña:</label>
                </div>
                <div className="col">
                    <input type="text"></input>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <label>Repetir Contraseña:</label>
                </div>
                <div className="col">
                    <input type="text"></input>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <label>Número de teléfono:</label>
                </div>
                <div className="col">
                    <input type="text"></input>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary" type="button" onClick={()=>{
                            location.href="/"
                        }}>Finalizar</button>
                    </div>
                </div>
                <div className="col">
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary lg" type="button" onClick={()=>{
                            location.href="/procesoRegistro1"
                        }}>Regresar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
}