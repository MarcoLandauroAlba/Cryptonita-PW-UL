import { Modal, Button } from 'react-bootstrap';

const ModalClienteP2V = (props) => {

    if (props.onMostrar) {
        const butGuardarOnClick = () => {
            props.almacenarOperacion(
                true,
                0,
                true,
                props.soles,
                props.bitcoins,
                '65898191',
                props.cuenta,
                false
            )
            props.onOcultar()
            props.habilitarModal3V()
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
                    <div>
                        <div className="h3 my-3">
                            Billetera de la empresa: 65898191
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
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary"
                    onClick={butGuardarOnClick}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    }else{
        return <></>
    }
}

export default ModalClienteP2V