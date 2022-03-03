import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalClienteP1C = (props) => {
    const [txtBilletera, setTxtBilletera] = useState("")
    const [billeteraCompleta, setBilleteraCompleta] = useState(true)

    if (props.onMostrar) {
        const BilleteraOnChange = (event) => {
            setTxtBilletera(event.target.value)
        }

        const butGuardarOnClick = async () => {
            if (txtBilletera.length == 8) {
                await props.almacenarBilletera(txtBilletera)
                props.onOcultar()
                props.habilitarModal2C()
            } else {
                setBilleteraCompleta(false)
            }
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
                        {
                            (() => {
                                if (!billeteraCompleta) {
                                    return <div className='h5 text-danger'>¡La billetera ingresada no cumple con los requisitos! </div>
                                }
                            })()
                        }
                        <label className="form-label">
                            Billetera digital:
                        </label>
                        <input id="TextInput" className="form-control" type="text" onChange={BilleteraOnChange} defaultValue={txtBilletera}>
                        </input>
                        <div className='h6'>Ingrese correctamente su billetera ( 8 dígitos ) </div>
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

export default ModalClienteP1C