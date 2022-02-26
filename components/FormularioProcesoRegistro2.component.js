import { useState } from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
/*
props Utilizados:
- guardar       : Almacena los valores de correo, contrasena y numero en la base de datos
- volver        : Sirve para regresar a la page anterior mas proxima (funciona como un stack)
- disponible    : Devuelve si el correo que se quiere ingresar esta duplicado
- procede       : Si el usuario ha realizado el proceso de registro 1, se mostrara toda la pantalla 
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
                                        {
                                            (() => {
                                                if (props.disponible == true) {
                                                    return (
                                                        <div className="row">
                                                            <div className="col">
                                                                <label htmlFor='correo'>Correo:</label>
                                                            </div>
                                                            <div className="col">
                                                                <input type="text" className="form-control" id='correo' defaultValue={correo} onChange={setCorreoOnChanged} />
                                                            </div>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div>
                                                            <div className="h4 my-2 text-danger">El correo ingresado ya esta registrado</div>
                                                            <div className="row mt-2">
                                                                <div className="col">
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 250, hide: 400 }}
                                                                        overlay={renderTooltip1}
                                                                    >
                                                                        <label htmlFor="correo" className="text-danger">Correo:</label>
                                                                    </OverlayTrigger>
                                                                </div>

                                                                <div className="col">
                                                                    <OverlayTrigger
                                                                        placement="left"
                                                                        delay={{ show: 250, hide: 400 }}
                                                                        overlay={renderTooltip2}
                                                                    >
                                                                        <input type="text" className="form-control" id='correo' defaultValue={correo} onChange={setCorreoOnChanged} />
                                                                    </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                        </div>)
                                                }
                                            })()
                                        }
                                        <div className="row mt-2">
                                            <div className="col">
                                                <label htmlFor='contrasena'>Contraseña:</label>
                                            </div>
                                            <div className="col">
                                                <input type="text" className="form-control" id='contrasena' defaultValue={contra} onChange={setContraOnChanged} />
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col">
                                                <label htmlFor='repetir'>Repetir contraseña:</label>
                                            </div>
                                            <div className="col">
                                                <input type="text" className="form-control" id='repetir' defaultValue={repContra} onChange={setRepContraOnChanged} />
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col">
                                                <label htmlFor='numero'>Número de teléfono:</label>
                                            </div>
                                            <div className="col">
                                                <input type="text" className="form-control" id='numero' defaultValue={numero} onChange={setNumeroOnChanged} />
                                            </div>
                                        </div>
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
                                                        onClick={() => { props.guardar() }}>
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