import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"


const ModalModificarOperacion = (props) => {

    const [estadoOperacion, setEstadoOperacion] = useState(false)
    const[idOperacion, setIdOperacion] = useState(0)
    const[idCliente, setIdCliente] = useState(0)
    const [tipo, setTipo] = useState('')
    const [compraBtc, setCompraBtc] = useState(0)
    const [ventaBtc, setVentaBtc] = useState(0)
    const [montoSoles, setMontoSoles] = useState(0)
    const [montoBtc, setMontoBtc] = useState(0)
    const [billetera, setBilletera] = useState(0)
    const [cuentaBanco, setCuentabanco] = useState(0)
    const [createdAt, setCreatedAt] = useState('')


    useEffect(()=> {
        if(props.operacion != null){
            setIdOperacion(props.operacion.id)
            setIdCliente(props.operacion.id_cliente)
            if(props.operacion.tipo==true){
                setTipo('Venta')
            }else{
                setTipo('Compra')
            }
            setCompraBtc(props.operacion.comprabtc)
            setVentaBtc(props.operacion.ventabtc)
            setMontoSoles(props.operacion.monto_soles)
            setMontoBtc(props.operacion.monto_btc)
            setBilletera(props.operacion.billetera)
            setCuentabanco(props.operacion.cuentabanco)
            setCreatedAt(props.operacion.createdAt)
            setEstadoOperacion(props.operacion.estado)
        }
    }, [props.operacion])
    
    const IdOperacionOnChange = (event) => {
        setIdOperacion(event.target.value)
    }
    
    const IdClienteOnChange = (event) => {
        setIdCliente(event.target.value)
    }
    
    const TipoOnChange = (event) => {
        setTipo(event.target.value)
    }
    
    const CompraBtcOnChange = (event) => {
        setCompraBtc(event.target.value)
    }
    
    const VentaBtcOnChange = (event) => {
        setVentaBtc(event.target.value)
    }

    const MontoSolesOnChange = (event) => {
        setMontoSoles(event.target.value)
    }

    const MontoBtcOnChange = (event) => {
        setMontoBtc(event.target.value)
    }

    const BilleteraOnChange = (event) => {
        setBilletera(event.target.value)
    }

    const CuentabancoOnChange = (event) => {
        setCuentabanco(event.target.value)
    }

    const CreatedAtOnChange = (event) => {
        setCreatedAt(event.target.value)
    }

    const setEstadoOperacionOnClick = (event) => {
        setEstadoOperacion(event.target.value)
    }
    
    const guardarOnClick = () => {
        const tipoconvert = false
        if(tipo == "Compra"){
            tipoconvert = false
        }
        else if(tipo == "Venta"){
            tipoconvert = true
        }
        props.onActualizarOperacion(idOperacion,idCliente,tipoconvert,compraBtc,ventaBtc,montoSoles,montoBtc,billetera,cuentaBanco,estadoOperacion)
        setIdOperacion(0)
        setIdCliente(0)
        setTipo('')
        setCompraBtc(0)
        setVentaBtc(0)
        setMontoSoles(0)
        setMontoBtc(0)
        setBilletera(0)
        setCuentabanco(0)
        setCreatedAt('')
        setEstadoOperacion(false)
    }

    const butCloseFormOnClick = () => {
        setIdOperacion(0)
        setIdCliente(0)
        setTipo('')
        setCompraBtc(0)
        setVentaBtc(0)
        setMontoSoles(0)
        setMontoBtc(0)
        setBilletera(0)
        setCuentabanco(0)
        setCreatedAt('')
        setEstadoOperacion(false)
        props.onOcultar()
    }
    return <Modal show={props.onMostrar} onHide={butCloseFormOnClick}>
            <Modal.Header closeButton>
                <Modal.Title>Operaciones</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form>
                    <div>
                        <label className="form-label">
                            Operación:
                        </label>
                        <fieldset disabled>
                            <input id="disabledTextInput" className="form-control" type="text" onChange={IdOperacionOnChange} defaultValue={idOperacion}>
                            </input>
                        </fieldset>
                    </div>
                    <div>
                        <label className="form-label">
                            ID del cliente:
                        </label>
                        <fieldset disabled>
                            <input id="disabledTextInput" className="form-control" type="text" onChange={IdClienteOnChange} defaultValue={idCliente}>
                            </input>
                        </fieldset>
                    </div>
                    <div>
                        <label className="form-label">
                            Tipo de transacción:
                        </label>
                        <fieldset disabled>
                            <input id="disabledTextInput" className="form-control" type="text" onChange={TipoOnChange} defaultValue={tipo}>
                            </input>
                        </fieldset>
                    </div>
                    <div>
                        <label className="form-label">
                            Precio de compra de BTC:
                        </label>
                        <fieldset disabled>
                            <input id="disabledTextInput" className="form-control" type="text" onChange={CompraBtcOnChange} defaultValue={compraBtc}>
                            </input>
                        </fieldset>
                    </div>
                    <div>
                        <label className="form-label">
                            Precio de venta de BTC:
                        </label>
                        <fieldset disabled>
                            <input id="disabledTextInput" className="form-control" type="text" onChange={VentaBtcOnChange} defaultValue={ventaBtc}>
                            </input>
                        </fieldset>
                    </div>
                    <div>
                        <label className="form-label">
                            Monto en soles:
                        </label>
                        <fieldset disabled>
                            <input id="disabledTextInput" className="form-control" type="text" onChange={MontoSolesOnChange} defaultValue={montoSoles}>
                            </input>
                        </fieldset>
                    </div>
                    <div>
                        <label className="form-label">
                            Monto en BTC:
                        </label>
                        <fieldset disabled>
                            <input id="disabledTextInput" className="form-control" type="text" onChange={MontoBtcOnChange} defaultValue={montoBtc}>
                            </input>
                        </fieldset>
                    </div>
                    <div>
                        <label className="form-label">
                            Billetera:
                        </label>
                        <fieldset disabled>
                            <input id="disabledTextInput" className="form-control" type="text" onChange={BilleteraOnChange} defaultValue={billetera}>
                            </input>
                        </fieldset>
                    </div>
                    <div>
                        <label className="form-label">
                            Cuenta BCP:
                        </label>
                        <fieldset disabled>
                            <input id="disabledTextInput" className="form-control" type="text" onChange={CuentabancoOnChange} defaultValue={cuentaBanco}>
                            </input>
                        </fieldset>
                    </div>
                    <div>
                        <label className="form-label">
                            Fecha:
                        </label>
                        <fieldset disabled>
                            <input id="disabledTextInput" className="form-control" type="text" onChange={CreatedAtOnChange} defaultValue={createdAt}>
                            </input>
                        </fieldset>
                    </div>
                    <div>
                        <label className="form-label my-1">Operacion</label>
                        <select className="form-select" defaultValue={estadoOperacion} onChange={setEstadoOperacionOnClick}>
                            <option value={false}>Por Validar</option>
                            <option value={true}>Validado</option>
                        </select>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={butCloseFormOnClick}>Cerrar</Button>
                <Button variant="primary" onClick={guardarOnClick}>Guardar</Button>
            </Modal.Footer>
        </Modal>
}
export default ModalModificarOperacion