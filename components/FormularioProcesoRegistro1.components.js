import { useEffect, useState } from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap";
/*
props Utilizados:
- guardar       : Almacena los valores de nombres, apellidos y dni en la base de datos
- volver        : Sirve para regresar a la page anterior mas proxima (funciona como un stack)
- disponible    : Devuelve si el DNI que se quiere ingresar esta duplicado
*/
const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        El DNI ingresado ya esta registrado
    </Tooltip>
);
const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Ingrese un nuevo numero de DNI
    </Tooltip>
);

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
                            <div className="row">
                                <div className="col">
                                    <label htmlFor='nombres'>Nombres:</label>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id='nombres' defaultValue={nombres} onChange={setNombresOnChanged} />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="apellidos">Apellidos:</label>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id='apellidos' defaultValue={apellidos} onChange={setApellidosOnChanged} />
                                </div>
                            </div>
                            {
                                (() => {
                                    if (props.disponible == true) {
                                        return (
                                            <div className="row mt-2">
                                                <div className="col">
                                                    <label htmlFor="dni">DNI:</label>
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control" id='dni' defaultValue={dni} onChange={setDniOnChanged} />
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div>
                                                <div className="h4 my-2 text-danger">El DNI ingresado ya esta registrado</div>
                                            <div className="row mt-2">
                                                <div className="col">
                                                    <OverlayTrigger
                                                        placement="right"
                                                        delay={{ show: 250, hide: 400 }}
                                                        overlay={renderTooltip1}
                                                    >
                                                        <label htmlFor="dni" className="text-danger">DNI:</label>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="col">
                                                    <OverlayTrigger
                                                        placement="left"
                                                        delay={{ show: 250, hide: 400 }}
                                                        overlay={renderTooltip2}
                                                    >
                                                        <input type="text" className="form-control" id='dni' defaultValue={dni} onChange={setDniOnChanged} />
                                                    </OverlayTrigger>
                                                </div>
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