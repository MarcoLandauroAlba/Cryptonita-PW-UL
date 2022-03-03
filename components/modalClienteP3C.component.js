import { Modal, Button } from 'react-bootstrap';
import { Image } from "react-bootstrap"

const ModalClienteP3C = (props) => {
    if (props.onMostrar) {

        const butCloseFormOnClick = () => {
            props.onOcultar()
        }

        return <Modal show={props.onMostrar} onHide={butCloseFormOnClick}>
            <Modal.Header closeButton>
                <Modal.Title>Paso 3 de 3</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="h3 my-3">
                        Compra realizada con exito!
                    </div>
                    <div className="h4 mt-3">
                        Número de transacción: {props.idOperacion}
                    </div>
                    <Image
                        src="https://www.cmtravessera.com/wp-content/uploads/2017/11/Gracias-por-tu-compra.gif"
                        alt="Aquí va una imagen referente a la espera"
                        thumbnail={true}
                        className="my-2 mx-auto d-block">
                    </Image>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary"
                    onClick={butCloseFormOnClick}>Continuar revisando ...</Button>
            </Modal.Footer>
        </Modal>
    } else {
        console.log('ModalClienteP3C fuera')
        return <></>
    }

}

export default ModalClienteP3C