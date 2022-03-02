import { useEffect, useState } from 'react';
import { Modal, Button} from 'react-bootstrap';

const ModalClienteP2V = (props) => {
    const[idOperacion, setOperacion] = useState(0)

    useEffect(()=> {
        if(props.idOperacion != null){
            setOperacion(props.idOperacion.id)
        }
    }, [props.idOperacion]) 
    
    // const IdClienteOnChange = (event) => {
    //     setIdCliente(event.target.value)
    // }

    // const BTipoOnChange = (event) => {
    //     setBTipo(event.target.value)
    // }

    // const ComprabtcOnChange = (event) => {
    //     setTxtComprabtc(event.target.value)
    // }

    // const VentabtcOnChange = (event) => {
    //     setTxtVentabtc(event.target.value)
    // }

    // const BilleteraOnChange = (event) => {
    //     setTxtBilletera(event.target.value)
    // }

    // const CuentabancoOnChange = (event) => {
    //     setTxtCuentabanco(event.target.value)
    // }
    
    // const EstadoOnChange = (event) => {
    //     setEstado(event.target.value)
    // }
    
    const butGuardarOnClick = () => {
        props.onOcultar()
        props.habilitarModal3V(true)
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
                        Billetera de la empresa: 65898191
                    </label>
                    <label className="form-label">
                        Número de transacción: {idOperacion}
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

export default ModalClienteP2V