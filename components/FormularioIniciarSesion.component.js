import { useState } from 'react'
/*
props Utilizados:
- validarUsuario       : Realiza el cruze de informacion con la base de datos para determinar si los datos son correctos
- contrasenaIncorrecta : Devuelve true si la contrasena no coincide con el correo enviado
- correoInexistente    : Devuelve true si el correo no coincide con ninguno en la base de datos
*/
export default function FormularioIniciarSesion(props) {

    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const setCorreoOnChange = (event) => {
        setCorreo(event.target.value)
    }
    const setContrasenaOnChange = (event) => {
        setContrasena(event.target.value)
    }

    return (
        <div className="row mt-4">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h3>Login</h3>
                        <form>
                            {
                                (() => {
                                    if (props.credencialesIncorrectas == true) {
                                        return (
                                            <div className="h4 my-2 text-danger">Las credenciales ingresadas son invalidas</div>
                                        )
                                    }
                                })()
                            }
                            <label htmlFor='correo' className="mt-2">Correo:</label>
                            <input type="text" className="form-control mt-2" id="correo" defaultValue={correo} onChange={setCorreoOnChange} />
                            <label htmlFor='contrasena' className="mt-2">Contraseña:</label>
                            <input type="password" className="form-control mt-2" id="contrasena" defaultValue={contrasena} onChange={setContrasenaOnChange} />
                            <div className="text-center">
                                <button
                                    className="btn btn-primary mt-4"
                                    type="button"
                                    onClick={() => { props.validarUsuario(correo, contrasena) }}>
                                    Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>)

}