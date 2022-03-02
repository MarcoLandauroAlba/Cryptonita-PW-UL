import { useEffect, useState } from 'react';
import { Modal, Button} from 'react-bootstrap';

const ModalClientes = (props) => {
    
    const[idCliente, setIdCliente] = useState(0)
    const [txtNombre, setTxtNombre] = useState("")
    const [txtDNI, setTxtDNI] = useState(0)
    const [txtCorreo, setTxtCorreo] = useState("")
    const [txtTelefono, setTxtTelefono] = useState(0)
    const [txtEstado, setTxtEstado] = useState("")
    const [txtApellido, setTxtApellido] = useState("")

    useEffect(()=> {
        console.log(props.cliente)
        if(props.cliente != null){
            setIdCliente(props.cliente.id)
            setTxtNombre(props.cliente.nombre)
            setTxtApellido(props.cliente.apellido)
            setTxtDNI(props.cliente.dni)
            setTxtTelefono(props.cliente.telefono)
            setTxtEstado(props.cliente.estado)
            setTxtCorreo(props.cliente.correo)
        }
    }, [props.cliente])
    
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

    const ApellidoOnChange = (event) => {
        setTxtApellido(event.target.value)
    }
    
    const butGuardarOnClick = () => {
        props.onActualizarCliente(idCliente, txtNombre, txtApellido, txtDNI, txtCorreo, txtTelefono, txtEstado)
        setTxtNombre("")
        setTxtApellido("")
        setTxtDNI(0)
        setTxtCorreo("")
        setTxtEstado("")
        setTxtTelefono(0)
        props.almacenarDatos()
    }

    const butCloseFormOnClick = () => {
        setTxtNombre("")
        setTxtApellido("")
        setTxtDNI(0)
        setTxtCorreo("")
        setTxtEstado("")
        setTxtTelefono(0)
        props.onOcultar()
    }
    
    return <Modal show={ props.onMostrar } onHide={ butCloseFormOnClick }>
        <Modal.Header closeButton>
            <Modal.Title>Clientes</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <div>
                    <label className="form-label">
                        Nombre
                    </label>
                    <fieldset disabled>
                    <input id="disabledTextInput" className="form-control" type="text" onChange={ NombreOnChange } defaultValue={ txtNombre }>
                    </input>
                    </fieldset>
                </div>
                <div>
                    <label className="form-label">
                        Apellido
                    </label>
                    <fieldset disabled>
                    <input id="disabledTextInput" className="form-control" type="text" onChange={ ApellidoOnChange } defaultValue={ txtApellido }>
                    </input>
                    </fieldset>
                </div>
                <div>
                    <label className="form-label">
                        DNI
                    </label>
                    <fieldset disabled>
                    <input id="disabledTextInput" className="form-control" type="number" onChange={ DNIOnChange } defaultValue={ txtDNI }>
                    </input>
                    </fieldset>
                </div>
                <div>
                    <label className="form-label">
                        Correo Electrónico
                    </label>
                    <fieldset disabled>
                    <input id="disabledTextInput" className="form-control" type="text" onChange={ CorreoOnChange } defaultValue={ txtCorreo }>
                    </input>
                    </fieldset>
                </div>
                <div>
                    <label className="form-label">
                        Número Teléfonico
                    </label>
                    <fieldset disabled>
                    <input id="disabledTextInput" className="form-control" type="number" onChange={ TelefonoOnChange } defaultValue={ txtTelefono }>
                    </input>
                    </fieldset>
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
            <Button variant="primary"
            onClick={ butGuardarOnClick }>Guardar</Button>
        </Modal.Footer>
    </Modal>
}

export default ModalClientes