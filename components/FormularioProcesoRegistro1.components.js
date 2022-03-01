import { useState } from "react"
/*
props Utilizados:
- guardar           : Almacena los valores de nombres, apellidos y dni en el localStorage
- volver            : Sirve para regresar a la page anterior mas proxima (funciona como un stack)
- VerFaltaNombre    : Manda true para mostrar que falta ingresar datos por parte del usuario en el campo nombre
- VerFaltaApellido  : Manda true para mostrar que falta ingresar datos por parte del usuario en el campo apellido
- VerFaltaDni       : Manda true para mostrar que falta ingresar datos por parte del usuario en el campo dni
*/
export default function FormularioProcesoRegistro1(props) {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [dni, setDni] = useState()
    const setNombresOnChanged = (event) => {
        setNombres(event.target.value)
    }
    const setApellidosOnChanged = (event) => {
        setApellidos(event.target.value)
    }
    const setDniOnChanged = (event) => {
        setDni(event.target.value)
    }

    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 mt-4">
                <div className="card">
                    <div className="card-body">
                        <h3>Paso 1 de 2</h3>
                        <form className="mt-4">
                            {/* AQUI SI DETERMINA SI FALTA INGRESAR DATOS EN NOMBRE O NO */}
                            {
                                (() => {
                                    if (props.VerFaltaNombre) {
                                        return (
                                            <div className="row my-3 border border-danger">
                                                <div className="text-danger mb-1">Es obligatorio rellenar este campo</div>
                                                <div className="col my-1">
                                                    <label htmlFor='nombres'>Nombres:</label>
                                                </div>
                                                <div className="col my-1">
                                                    <input type="text" className="form-control" id='nombres' defaultValue={nombres} onChange={setNombresOnChanged} />
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="row my-3">
                                                <div className="col my-1">
                                                    <label htmlFor='nombres'>Nombres:</label>
                                                </div>
                                                <div className="col my-1">
                                                    <input type="text" className="form-control" id='nombres' defaultValue={nombres} onChange={setNombresOnChanged} />
                                                </div>
                                            </div>
                                        )
                                    }
                                })()
                            }
                            {/* AQUI SI DETERMINA SI FALTA INGRESAR DATOS EN APELLIDO O NO */}
                            {
                                (() => {
                                    if (props.VerFaltaApellido) {
                                        return (
                                            <div className="row my-3 border border-danger">
                                                <div className="text-danger mb-1">Es obligatorio rellenar este campo</div>
                                                <div className="col my-1">
                                                    <label htmlFor="apellidos">Apellidos:</label>
                                                </div>
                                                <div className="col my-1">
                                                    <input type="text" className="form-control" id='apellidos' defaultValue={apellidos} onChange={setApellidosOnChanged} />
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="row my-3">
                                                <div className="col my-1">
                                                    <label htmlFor="apellidos">Apellidos:</label>
                                                </div>
                                                <div className="col my-1">
                                                    <input type="text" className="form-control" id='apellidos' defaultValue={apellidos} onChange={setApellidosOnChanged} />
                                                </div>
                                            </div>
                                        )
                                    }
                                })()
                            }
                            {/* AQUI SI DETERMINA SI FALTA INGRESAR 8 DIGITOS EN DNI O NO */}
                            {
                                (() => {
                                    if (props.VerFaltaDni) {
                                        return (
                                            <div className="row my-3 border border-danger">
                                                <div className="text-danger mb-1">Es obligatorio ingresar 8 digitos</div>
                                                <div className="col my-1">
                                                    <label htmlFor="dni">DNI:</label>
                                                </div>
                                                <div className="col my-1">
                                                    <input type="number" className="form-control" id='dni' defaultValue={dni} onChange={setDniOnChanged} />
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="row my-3">
                                                <div className="col my-1">
                                                    <label htmlFor="dni">DNI:</label>
                                                </div>
                                                <div className="col my-1">
                                                    <input type="number" className="form-control" id='dni' defaultValue={dni} onChange={setDniOnChanged} />
                                                </div>
                                            </div>
                                        )
                                    }
                                })()
                            }

                            <div className="row mt-4">
                                <div className="col">
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            onClick={() => { props.volver() }}>
                                            Regresar
                                        </button>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-grid gap-2 d-md-block">
                                        <button
                                            className="btn btn-primary lg"
                                            type="button"
                                            onClick={() => {
                                                props.guardar(nombres, apellidos, dni)
                                            }}>
                                            Siguiente
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>)
}