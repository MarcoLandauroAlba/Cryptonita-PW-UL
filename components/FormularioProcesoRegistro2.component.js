import { useState } from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
/*
props Utilizados:
- guardar           : Almacena los valores de correo, contrasena y numero en la base de datos
- volver            : Sirve para regresar a la page anterior mas proxima (funciona como un stack)
- disponible        : Devuelve si el correo que se quiere ingresar esta duplicado
- procede           : Si el usuario ha realizado el proceso de registro 1, se mostrara toda la pantalla 
- VerFaltaCorreo    : Manda true para mostrar que falta ingresar datos por parte del usuario en el campo correo
- VerFaltaContraOri    : Manda true para mostrar que falta ingresar datos por parte del usuario en el campo contrasena
- VerFaltaContraRep    : Manda true para mostrar que falta ingresar datos por parte del usuario en el campo contrasena repetida
- VerFaltaTelefono    : Manda true para mostrar que falta ingresar datos por parte del usuario en el campo telefono
*/
const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        El correo ingresado ya esta registrado
    </Tooltip>
);
const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Ingrese un nuevo correo
    </Tooltip>
);

export default function FormularioProcesoRegistro2(props) {

    const [correo, setCorreo] = useState('')
    const [contra, setContra] = useState('')
    const [repContra, setRepContra] = useState('')
    const [numero, setNumero] = useState()
    const setCorreoOnChanged = (event) => {
        setCorreo(event.target.value)
    }
    const setContraOnChanged = (event) => {
        setContra(event.target.value)
    }
    const setRepContraOnChanged = (event) => {
        setRepContra(event.target.value)
    }
    const setNumeroOnChanged = (event) => {
        setNumero(event.target.value)
    }

    return (
        (() => {
            if (props.procede == true) {
                return (
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 mt-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Paso 2 de 2</h3>
                                    <form className="mt-4">



                                        {/* AQUI SI DETERMINA SI FALTA INGRESAR DATOS EN CONTRASENA O NO */}
                                        {
                                            (() => {
                                                console.log('props.VerFaltaCorreo', props.VerFaltaCorreo)
                                                if (props.VerFaltaCorreo) {
                                                    return (
                                                        <div className="row my-3 border border-danger">
                                                            <div className="text-danger mb-1">Debe ingresar un correo valido</div>
                                                            <div className="col my-1">
                                                                <label htmlFor='correo'>Correo:</label>
                                                            </div>
                                                            <div className="col my-1">
                                                                <input type="text" className="form-control" id='correo' defaultValue={correo} onChange={setCorreoOnChanged} />
                                                            </div>
                                                        </div>
                                                    )
                                                } else {
                                                    if (props.disponible) {
                                                        return (
                                                            <div className="row my-3">
                                                                <div className="col my-1">
                                                                    <label htmlFor='correo'>Correo:</label>
                                                                </div>
                                                                <div className="col my-1">
                                                                    <input type="text" className="form-control" id='correo' defaultValue={correo} onChange={setCorreoOnChanged} />
                                                                </div>
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div className="row my-3 border border-danger">
                                                                <div className="text-danger mb-1">El correo ingresado ya existe</div>
                                                                <div className="col my-1">
                                                                    <label htmlFor='correo'>Correo:</label>
                                                                </div>
                                                                <div className="col my-1">
                                                                    <input type="text" className="form-control" id='correo' defaultValue={correo} onChange={setCorreoOnChanged} />
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                }
                                            })()
                                        }




























                                        {/* AQUI SI DETERMINA SI FALTA INGRESAR DATOS EN CONTRASENA O NO */}
                                        {
                                            (() => {
                                                console.log('props.VerFaltaContraOri', props.VerFaltaContraOri)
                                                if (props.VerFaltaContraOri) {
                                                    return (
                                                        <div className="row my-3 border border-danger">
                                                            <div className="text-danger mb-1">Es obligatorio rellenar este campo</div>
                                                            <div className="col my-1">
                                                                <label htmlFor='contrasena'>Contraseña:</label>
                                                            </div>
                                                            <div className="col my-1">
                                                                <input type="text" className="form-control" id='contrasena' defaultValue={contra} onChange={setContraOnChanged} />
                                                            </div>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div className="row my-3">
                                                            <div className="col my-1">
                                                                <label htmlFor='contrasena'>Contraseña:</label>
                                                            </div>
                                                            <div className="col my-1">
                                                                <input type="text" className="form-control" id='contrasena' defaultValue={contra} onChange={setContraOnChanged} />
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })()
                                        }

                                        {/* AQUI SI DETERMINA SI FALTA INGRESAR DATOS EN CONTRASENA REPETICION O NO */}
                                        {
                                            (() => {
                                                console.log('props.VerFaltaContraRep', props.VerFaltaContraRep)
                                                if (props.VerFaltaContraRep) {
                                                    return (
                                                        <div className="row my-3 border border-danger">
                                                            <div className="text-danger mb-1">Es obligatorio que este campo sea igual al superior</div>
                                                            <div className="col my-1">
                                                                <label htmlFor='repetir'>Repetir contraseña:</label>
                                                            </div>
                                                            <div className="col my-1">
                                                                <input type="text" className="form-control" id='repetir' defaultValue={repContra} onChange={setRepContraOnChanged} />
                                                            </div>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div className="row my-3">
                                                            <div className="col my-1">
                                                                <label htmlFor='repetir'>Repetir contraseña:</label>
                                                            </div>
                                                            <div className="col my-1">
                                                                <input type="text" className="form-control" id='repetir' defaultValue={repContra} onChange={setRepContraOnChanged} />
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })()
                                        }

                                        {/* AQUI SI DETERMINA SI FALTA INGRESAR DATOS EN TELEFONO O NO */}
                                        {
                                            (() => {
                                                console.log('props.VerFaltaTelefono', props.VerFaltaTelefono)
                                                if (props.VerFaltaTelefono) {
                                                    return (
                                                        <div className="row my-3 border border-danger">
                                                            <div className="text-danger mb-1">Ingrese un numero telefonico valido (7 o 9 digitos)</div>
                                                            <div className="col my-1">
                                                                <label htmlFor='numero'>Número de teléfono:</label>
                                                            </div>
                                                            <div className="col my-1">
                                                                <input type="text" className="form-control" id='numero' defaultValue={numero} onChange={setNumeroOnChanged} />
                                                            </div>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div className="row my-3">
                                                            <div className="col my-1">
                                                                <label htmlFor='numero'>Número de teléfono:</label>
                                                            </div>
                                                            <div className="col my-1">
                                                                <input type="text" className="form-control" id='numero' defaultValue={numero} onChange={setNumeroOnChanged} />
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
                                                        onClick={() => { props.guardar(correo, contra, repContra, numero) }}>
                                                        Finalizar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                )
            } else {
                return (
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 mt-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Paso 2 de 2</h3>
                                    <h4 className="mt-4 text-danger text-center">Se tiene que realizar el Paso 1 de 2 para continuar con el Paso 2 de 2</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                )
            }
        })()
    )
}