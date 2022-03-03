import { useState } from "react"
/*
props Utilizados:
- tipoDeCliente: Solo renderiza en pantalla si es un cliente de tipo administrador (SEGURIDAD)
- buscarUsuarios: Sirve para poder buscar usuarios por medio de caracteristicas definidas en los inputs
*/
const OpcionesUsuariosAdmin = (props) => {

    const [datosDNI, setDatosDNI] = useState()
    const [datosNOMBRE, setDatosNOMBRE] = useState()
    const [datosAPELLIDO, setDatosAPELLIDO] = useState()
    const [datosCORREO, setDatosCORREO] = useState()

    const setDatosOnChangeDNI = (event) => {
        setDatosDNI(event.target.value)
    }
    const setDatosOnChangeNOMBRE = (event) => {
        setDatosNOMBRE(event.target.value)
    }
    const setDatosOnChangeAPELLIDO = (event) => {
        setDatosAPELLIDO(event.target.value)
    }
    const setDatosOnChangeCORREO = (event) => {
        setDatosCORREO(event.target.value)
    }

    if (props.tipoDeCliente == 1) {                     // SOLO SE PODRA MOSTRAR ESTE CONTENIDO SI ES TIPO DE USUARIO ADMINISTRADOR (tipoDeCliente = 1)
        return (
            <div className="row my-4">
                <div className="col-md-1"></div>
                <div className="col-md-10 row">
                    <div className="col">
                        <form>
                            <label className="mx-2 h5" >Filtrar por DNI:</label>
                            <div className="d-flex justify-content-end">
                                <input
                                    className="mx-2"
                                    type="number"
                                    name="primero"
                                    placeholder="12345678"
                                    onChange={setDatosOnChangeDNI}
                                    defaultValue={datosDNI}
                                />
                                <button
                                    type="button"
                                    className="mx-2 btn btn-primary"
                                    onClick={() => { props.buscarUsuarios(datosDNI, 'DNI') }}>
                                    Buscar
                                </button>
                            </div>
                        </form>
                        <form>
                            <label className="mx-2 h5" >Filtrar por nombre:</label>
                            <div className="d-flex justify-content-end">
                                <input
                                    className="mx-2"
                                    type="text"
                                    placeholder="Nombre"
                                    name="segundo"
                                    onChange={setDatosOnChangeNOMBRE}
                                    defaultValue={datosNOMBRE}
                                />
                                <button
                                    type="button"
                                    className="mx-2 btn btn-primary"
                                    onClick={() => { props.buscarUsuarios(datosNOMBRE, 'NOMBRE') }}>
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <form>
                            <label className="mx-2 h5" >Filtrar por apellido:</label>
                            <div className="d-flex justify-content-end">
                                <input
                                    className="mx-2"
                                    type="text"
                                    placeholder="Apellido"
                                    name="tercero"
                                    onChange={setDatosOnChangeAPELLIDO}
                                    defaultValue={datosAPELLIDO}
                                />
                                <button
                                    type="button"
                                    className="mx-2 btn btn-primary"
                                    onClick={() => { props.buscarUsuarios(datosAPELLIDO, 'APELLIDO') }}>
                                    Buscar
                                </button>
                            </div>
                        </form>
                        <form>
                            <label className="mx-2 h5" >Filtrar por correo:</label>
                            <div className="d-flex justify-content-end">
                                <input
                                    className="mx-2"
                                    type="email"
                                    placeholder="ejemplo@correo.com"
                                    name="cuarto"
                                    onChange={setDatosOnChangeCORREO}
                                    defaultValue={datosCORREO}
                                />
                                <button
                                    type="button"
                                    className="mx-2 btn btn-primary"
                                    onClick={() => { props.buscarUsuarios(datosCORREO, 'CORREO') }}>
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        )
    } else {
        return <></>
    }
}

export default OpcionesUsuariosAdmin