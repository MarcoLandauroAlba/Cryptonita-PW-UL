import { Image } from "react-bootstrap"
/*
props Utilizados:
- tipoDeCliente     : Puede tener 4 valores (1:admin,2:usuarioConf,3:UsuarioNoConf,4:invitado)
- redireccionamiento: Recibe un argumento (direccion) y te redirige al destino
- salir             : Sirve para salir del tipo de usuario 1, 2 y 3 hacia el 4
- ubicacion         : Envia la ubicacion actual para activar el boton de la pagina visitada
*/
const MenuNavegacion = (props) => {

    if (props.tipoDeCliente == 1) {        //ADMINISTRADOR
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid d-flex justify-content-between">
                    {/* PRIMER ELEMENTO */}
                    <button className="btn navbar-brand " onClick={() => { props.redireccionamiento('/') }}>
                        <Image
                            alt="..."
                            className="me-2"
                            src="https://img2.freepng.es/20180324/luq/kisspng-bitcoin-paypal-cryptocurrency-ethereum-litecoin-bitcoin-5ab6e3fcaf1991.4843415715219353567172.jpg"
                            fluid={true}
                            width={25}
                        />
                        Cryptonita
                    </button>
                    {/* SEGUNDO ELEMENTO */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* TERCER ELEMENTO */}
                    <div className="collapse navbar-collapse justify-content-end mx-4" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'ClientesPage') {
                                                return (
                                                    <button className="nav-link btn active" onClick={() => { props.redireccionamiento('/ClientesPage') }}>Clientes</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => { props.redireccionamiento('/ClientesPage') }}>Clientes</button>
                                                )
                                            }
                                        })()
                                }
                            </li>
                            <li className="nav-item">
                                {/*TODO: FALTA ACTUALIZAR ESTE BOTON CON LA DIRECCION CORRESPONDIENTE  */}
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'ModificarTCambioAdmin') {
                                                return (
                                                    <button className="nav-link btn active" onClick={() => { props.redireccionamiento('/ModificarTCambioAdmin') }}>Tipo de Cambio</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => { props.redireccionamiento('/ModificarTCambioAdmin') }}>Tipo de Cambio</button>
                                                )
                                            }
                                        })()
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'OperacionesAdmin') {
                                                return (
                                                    <button className="nav-link btn active" onClick={() => { props.redireccionamiento('/OperacionesAdmin') }}>Operaciones</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => { props.redireccionamiento('/OperacionesAdmin') }}>Operaciones</button>
                                                )
                                            }
                                        })()
                                }
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => { props.salir() }}>
                                    Cerrar Sesion
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    } else if (props.tipoDeCliente == 2) { //USUARIO - CONFIRMADO
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid d-flex justify-content-between">
                    {/* PRIMER ELEMENTO */}
                    <button className="btn navbar-brand " onClick={() => { props.redireccionamiento('/') }}>
                        <Image
                            alt="..."
                            className="me-2"
                            src="https://img2.freepng.es/20180324/luq/kisspng-bitcoin-paypal-cryptocurrency-ethereum-litecoin-bitcoin-5ab6e3fcaf1991.4843415715219353567172.jpg"
                            fluid={true}
                            width={25}
                        />
                        Cryptonita
                    </button>
                    {/* SEGUNDO ELEMENTO */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* TERCER ELEMENTO */}
                    <div className="collapse navbar-collapse justify-content-end mx-4" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'compraVenta') {
                                                return (
                                                    <button className="nav-link btn active" onClick={() => { props.redireccionamiento('/compraVenta') }}>Compra/Venta</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => { props.redireccionamiento('/compraVenta') }}>Compra/Venta</button>
                                                )
                                            }
                                        })()
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'historialTrans') {
                                                return (
                                                    <button className="nav-link btn active" onClick={() => { props.redireccionamiento('/historialTrans') }}>Historial de Operaciones</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => { props.redireccionamiento('/historialTrans') }}>Historial de Operaciones</button>
                                                )
                                            }
                                        })()
                                }
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => { props.salir() }}>
                                    Cerrar Sesion
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    } else if (props.tipoDeCliente == 3) { //USUARIO - NO CONFIRMADO
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid d-flex justify-content-between">
                    {/* PRIMER ELEMENTO */}
                    <button className="btn navbar-brand " onClick={() => { props.redireccionamiento('/') }}>
                        <Image
                            alt="..."
                            className="me-2"
                            src="https://img2.freepng.es/20180324/luq/kisspng-bitcoin-paypal-cryptocurrency-ethereum-litecoin-bitcoin-5ab6e3fcaf1991.4843415715219353567172.jpg"
                            fluid={true}
                            width={25}
                        />
                        Cryptonita
                    </button>
                    {/* TERCER ELEMENTO */}
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => { props.salir() }}>
                        Cerrar Sesion
                    </button>
                </div>
            </nav>
        )
    } else {                        //INVITADO
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid d-flex justify-content-between">
                    {/* PRIMER ELEMENTO */}
                    <button className="btn navbar-brand " onClick={() => { props.redireccionamiento('/') }}>
                        <Image
                            alt="..."
                            className="me-2"
                            src="https://img2.freepng.es/20180324/luq/kisspng-bitcoin-paypal-cryptocurrency-ethereum-litecoin-bitcoin-5ab6e3fcaf1991.4843415715219353567172.jpg"
                            fluid={true}
                            width={25}
                        />
                        Cryptonita
                    </button>
                    {/* SEGUNDO ELEMENTO */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* TERCER ELEMENTO */}
                    <div className="collapse navbar-collapse justify-content-end mx-4" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'procesoRegistro1') {
                                                return (
                                                    <button className="nav-link btn active" onClick={() => { props.redireccionamiento('/procesoRegistro1') }}>Abrir Cuenta</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => { props.redireccionamiento('/procesoRegistro1') }}>Abrir Cuenta</button>
                                                )
                                            }
                                        })()
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'IniciarSesion') {
                                                return (
                                                    <button className="nav-link btn active" onClick={() => { props.redireccionamiento('/IniciarSesion') }}>Iniciar Sesion</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => { props.redireccionamiento('/IniciarSesion') }}>Iniciar Sesion</button>
                                                )
                                            }
                                        })()
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

export default MenuNavegacion