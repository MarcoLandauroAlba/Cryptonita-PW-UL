import { useEffect, useState } from 'react';
import { Modal, Button} from 'react-bootstrap';

const ModalClienteP3V = (props) => {
    const[idCliente, setIdCliente] = useState(0)
    const[idOperacion, setOperacion] = useState(0)
    //TODOS: TRUE:VENTA, FALSE:COMPRA
    const [BTipo, setBTipo] = useState(false)
    const [Comprabtc, setTxtComprabtc] = useState(0)
    const [Ventabtc, setTxtVentabtc] = useState(0)
    const [MontoSoles, setMontoSoles] = useState(0)
    const [MontoBTC, setMontoBTC] = useState(0)
    const [txtBilletera, setTxtBilletera] = useState("")
    const [Cuentabanco, setTxtCuentabanco] = useState("32454482218612")
    const [txtEstado, setEstado] = useState(false)

    useEffect(()=> {
        if(props.operacion != null){
            setIdCliente(props.operacion.id_cliente)
            setTxtComprabtc(props.operacion.comprabtc)
            setTxtVentabtc(props.operacion.ventabtc)
            setMontoSoles(props.operacion.montoSoles)
            setMontoBTC(props.operacion.montoBTC)
            setTxtBilletera(props.operacion.billetera)
            setTxtCuentabanco(props.operacion.cuentabanco)
        }
        setOperacion(props.idOperacion.id)
    }, [props.operacion]) 
    
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
        props.almacenarOperacion(idCliente,BTipo,Comprabtc,Ventabtc,MontoSoles,MontoBTC,txtBilletera,Cuentabanco,txtEstado)
        props.onOcultar()
    }

    const butCloseFormOnClick = () => {
        setIdCliente(0)
        setBTipo(false)
        setTxtComprabtc(0)
        setTxtVentabtc(0)
        setMontoSoles(0)
        setMontoBTC(0)
        setTxtBilletera("")
        setTxtCuentabanco("32454482218612")
        setEstado("")
        props.onOcultar()
    }

    
    return <Modal show={ props.onMostrar } onHide={ butCloseFormOnClick }>
        <Modal.Header closeButton>
            <Modal.Title>Paso 3 de 3</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <div>
                    <label className="form-label">
                        Número de transacción: {idOperacion}
                    </label>
                    <Image 
                    src="https://online.portoviejo.gob.ec/Imagenes/loading.gif" 
                    alt="Aquí va una imagen referente a la espera"
                    thumbnail={true} 
                    className="my-2 mx-auto d-block">
                    </Image>
                </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary"
            onClick={ butGuardarOnClick }>Enviar</Button>
        </Modal.Footer>
    </Modal>
}

export default ModalClienteP3V