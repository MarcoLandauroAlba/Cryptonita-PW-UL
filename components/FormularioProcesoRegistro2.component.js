import { useState } from "react"

export default function FormularioProcesoRegistro2(props) {

    const [correo,setCorreo]=useState('')
    const [contra,setContra]=useState('')
    const [repContra,setRepContra]=useState('')
    const [numero,setNumero]=useState()
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
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 mt-4">
                <div className="card">
                    <div className="card-body">
                        <h3>Paso 2 de 2</h3>
                        <form className="mt-4">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor='correo'>Correo:</label>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id='correo' defaultValue={correo} onChange={setCorreoOnChanged}/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor='contrasena'>Contraseña:</label>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id='contrasena' defaultValue={contra} onChange={setContraOnChanged}/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">   
                                    <label htmlFor='repetir'>Repetir contraseña:</label>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id='repetir' defaultValue={repContra} onChange={setRepContraOnChanged}/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor='numero'>Número de teléfono:</label>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id='numero' defaultValue={numero} onChange={setNumeroOnChanged}/>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col">
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button 
                                            className="btn btn-primary" 
                                            type="button" 
                                            onClick={() => {props.volver()}}>
                                            Regresar
                                        </button>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-grid gap-2 d-md-block">
                                        <button 
                                            className="btn btn-primary lg" 
                                            type="button" 
                                            onClick={() => {props.guardar()}}>
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
        </div>)
}