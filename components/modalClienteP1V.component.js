import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalClienteP1V = (props) => {
    const [txtCuenta, setTxtCuenta] = useState("")
    const [cuentaCompleta, setCuentaCompleta] = useState(true)

    if (props.onMostrar) {
        const CuentaOnChange = (event) => {
            setTxtCuenta(event.target.value)
        }

        const butGuardarOnClick = async () => {
            if (txtCuenta.length == 14) {
                await props.almacenarCuenta(txtCuenta)
                props.onOcultar()
                props.habilitarModal2V()
            } else {
                setCuentaCompleta(false)
            }
        }

        const butCloseFormOnClick = () => {
            setTxtCuenta("")
            ops.almacenarCuenta("")
            props.onOcultar()
        }

        return <Modal show={props.onMostrar} onHide={butCloseFormOnClick}>
            <Modal.Header closeButton>
                <Modal.Title>Paso 1 de 3</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div>
                        {
                            (() => {
                                if (!cuentaCompleta) {
                                    return <div className='h5 text-danger'>¡La cuenta ingresada no cumple con los requisitos! </div>
                                }
                            })()
                        }
                        <label className="form-label">
                            Cuenta BCP:
                        </label>
                        <input id="TextInput" className="form-control" type="text" onChange={CuentaOnChange} defaultValue={txtCuenta}>
                        </input>
                        <div className='h6'>Ingrese correctamente su cuenta BCP ( 14 dígitos ) </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary"
                    onClick={butGuardarOnClick}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    } else {
        return <></>
    }
}

export default ModalClienteP1V