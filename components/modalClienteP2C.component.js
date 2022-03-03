import { Modal, Button } from 'react-bootstrap';

const ModalClienteP2C = (props) => {
    if (props.onMostrar) {
        const butGuardarOnClick = () => {
            props.almacenarOperacion(
                false,
                true,
                0,
                props.soles,
                props.bitcoins,
                props.billetera,
                '32454482218612',
                false
            )
            props.onOcultar()
            props.habilitarModal3C()
        }

        const butCloseFormOnClick = () => {
            props.onOcultar()
        }


        return <Modal show={props.onMostrar} onHide={butCloseFormOnClick}>
            <Modal.Header closeButton>
                <Modal.Title>Paso 2 de 3</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <div className="h3 my-3">
                        Cuenta BCP de la empresa: 32454482218612
                    </div>
                    <div className="h4 mt-3">
                        Número de transacción: {props.idOperacion}
                    </div>
                    <div className="h6 mt-3">
                        Cantidad de Bincoins comprados: ฿/.{props.bitcoins}
                    </div>
                    <div className="h6 mt-3">
                        Costo de la transaccion: S/.{props.soles}
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary"
                    onClick={butGuardarOnClick}>Confirmar transaccion</Button>
            </Modal.Footer>
        </Modal>
    } else {
        return <></>
    }


}

export default ModalClienteP2C