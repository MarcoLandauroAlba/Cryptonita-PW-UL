import { useEffect, useState } from 'react';
import { Modal, Button} from 'react-bootstrap';

const ModalClienteP1V = (props) => {
    
    const [txtCuenta, setTxtCuenta] = useState("")
    
    const CuentaOnChange = (event) => {
        setTxtCuenta(event.target.value)
    }
    
    const butGuardarOnClick = () => {
        props.almacenarCuenta(txtCuenta)
        props.onOcultar()
        props.habilitarModal2(Vtrue)
    }

    const butCloseFormOnClick = () => {
        setTxtCuenta("")
        props.almacenarCuenta("")
        props.onOcultar()
    }
    
    return <Modal show={ props.onMostrar } onHide={ butCloseFormOnClick }>
        <Modal.Header closeButton>
            <Modal.Title>Paso 2 de 3</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <div>
                    <label className="form-label">
                        Cuenta BCP:
                    </label>
                    <input id="TextInput" className="form-control" type="text" onChange={ CuentaOnChange } defaultValue={ txtCuenta }>
                    </input>
                </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary"
            onClick={ butGuardarOnClick }>Confirmar</Button>
        </Modal.Footer>
    </Modal>
}

export default ModalClienteP1V