import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"

export default function ModalModificarOperacion(props) {

    const [estadoOperacion, setEstadoOperacion] = useState(0)

    const setEstadoOperacionOnClick = (event) => {
        setEstadoOperacion(event.target.value)
    }

    useEffect(()=>{
        setEstadoOperacion(props.operacion.estado)
        console.log('ahora->',props.operacion.estado)
    },[props.mostrar,props.operacion.estado])
    
    const guardarOnClick = () => {
        props.guardar(props.operacion.id,estadoOperacion)
    }

    if(props.mostrar){
        return (
            <Modal show={props.mostrar} onHide={props.ocultar}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
    
                <Modal.Body>
                    <form>
                        <div>
                            <label className="form-label my-1">Operacion</label>
                            <select className="form-select" defaultValue={estadoOperacion} onChange={setEstadoOperacionOnClick}>
                            {
                                console.log('renderizo=>',estadoOperacion)
                            }
                                <option value={1}>Pendiente</option>
                                <option value={0}>Aceptada</option>
                            </select>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Cerrar</Button>
                    <Button variant="primary" onClick={guardarOnClick}>Guardar</Button>
                </Modal.Footer>
            </Modal>
        )
    }else{
        return <></>
    }
}