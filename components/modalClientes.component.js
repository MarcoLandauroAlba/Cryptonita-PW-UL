import { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';

const ModalClientes = (props) => {
    
    const [txtID, setTxtID] = useState("")
    const [txtNombre, setTxtNombre] = useState("")
    const [txtDNI, setTxtDNI] = useState(0)
    const [txtCorreo, setTxtCorreo] = useState("")
    const [txtTelefono, setTxtTelefono] = useState(0)
    const [txtEstado, setTxtEstado] = useState("")

    const IDOnChange = (event) => {
        setTxtID(event.target.value)
    }

    const NombreOnChange = (event) => {
        setTxtNombre(event.target.value)
    }
    
    const DNIOnChange = (event) => {
        setTxtDNI(event.target.value)
    }
    
    const CorreoOnChange = (event) => {
        setTxtCorreo(event.target.value)
    }
    
    const TelefonoOnChange = (event) => {
        setTxtTelefono(event.target.value)
    }
    
    const EstadoOnChange = (event) => {
        setTxtEstado(event.target.value)
    }
    
    
    return <Modal show={ props.onMostrar } onHide={ props.onOcultar }>
        <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <div>
                    <label className="form-label">
                        ID
                    </label>
                    <input className="form-control" type="text" onChange={ IDOnChange } defaultValue={ txtID }>
                    </input>
                </div>
                <div>
                    <label className="form-label">
                        Nombre Completo
                    </label>
                    <input className="form-control" type="text" onChange={ NombreOnChange } defaultValue={ txtNombre }>
                    </input>
                </div>
                <div>
                    <label className="form-label">
                        DNI
                    </label>
                    <input className="form-control" type="number" onChange={ DNIOnChange } defaultValue={ txtDNI }>
                    </input>
                </div>
                <div>
                    <label className="form-label">
                        Correo Electrónico
                    </label>
                    <input className="form-control" type="text" onChange={ CorreoOnChange } defaultValue={ txtCorreo }>
                    </input>
                </div>
                <div>
                    <label className="form-label">
                        Número Teléfonico
                    </label>
                    <input className="form-control" type="number" onChange={ TelefonoOnChange } defaultValue={ txtTelefono }>
                    </input>
                </div>
                <div>
                    <label className="form-label">
                        Estado
                    </label>
                    <input className="form-control" type="text" onChange={ EstadoOnChange } defaultValue={ txtEstado }>
                    </input>
                </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary">Cerrar</Button>
            <Button variant="primary">Guardar</Button>
        </Modal.Footer>
    </Modal>
}

export default ModalClientes