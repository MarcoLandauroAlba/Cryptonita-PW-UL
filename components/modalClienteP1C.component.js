import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalClienteP1C = (props) => {
    const [txtBilletera, setTxtBilletera] = useState("")
    if (props.onMostrar) {
        console.log('ModalClienteP1C dentro')
        

        const BilleteraOnChange = (event) => {
            setTxtBilletera(event.target.value)
        }

        const butGuardarOnClick = async () => {
            await props.almacenarBilletera(txtBilletera)
            props.onOcultar()
            props.habilitarModal2C()
        }

        const butCloseFormOnClick = async () => {
            setTxtBilletera("")
            await props.almacenarBilletera("")
            props.onOcultar()
        }

        return <Modal show={props.onMostrar} onHide={butCloseFormOnClick}>
            <Modal.Header closeButton>
                <Modal.Title>Paso 1 de 3</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div>
                        <label className="form-label">
                            Billetera digital:
                        </label>
                        <input id="TextInput" className="form-control" type="text" onChange={BilleteraOnChange} defaultValue={txtBilletera}>
                        </input>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary"
                    onClick={butGuardarOnClick}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    } else {
        console.log('ModalClienteP1C fuera')
        return <></>
    }
}

export default ModalClienteP1C