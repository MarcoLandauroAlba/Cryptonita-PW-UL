import { useEffect, useState } from 'react';
import { Modal, Button} from 'react-bootstrap';

const ModalClienteP2C = (props) => {
    
    const butGuardarOnClick = () => {
        props.onOcultar()
        props.habilitarModal3C(true)
    }

    const butCloseFormOnClick = () => {
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
                        Cuenta BCP de la empresa: 32454482218612
                    </label>
                    <label className="form-label">
                        Número de transacción: {props.idOperacion}
                    </label>
                </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary"
            onClick={ butGuardarOnClick }>Confirmar</Button>
        </Modal.Footer>
    </Modal>
}

export default ModalClienteP2C