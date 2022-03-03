import { useEffect, useState } from 'react';
import { Modal, Button} from 'react-bootstrap';

const ModalClienteP1C = (props) => {
    
    const [txtBilletera, setTxtBilletera] = useState("")
    
    const BilleteraOnChange = (event) => {
        setTxtBilletera(event.target.value)
    }
    
    const butGuardarOnClick = () => {
        props.almacenarBilletera(txtBilletera)
        console.log('props.onOcultar()')
        props.onOcultar()
        console.log('props.habilitarModal2C(true)')
        props.habilitarModal2C(true)
    }

    const butCloseFormOnClick = () => {
        setTxtBilletera("")
        props.almacenarBilletera("")
        props.onOcultar()
    }
    
    return <Modal show={ props.onMostrar } onHide={ butCloseFormOnClick }>
        <Modal.Header closeButton>
            <Modal.Title>Paso 1 de 3</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <div>
                    <label className="form-label">
                        Billetera digital:
                    </label>
                    <input id="TextInput" className="form-control" type="text" onChange={ BilleteraOnChange } defaultValue={ txtBilletera }>
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

export default ModalClienteP1C