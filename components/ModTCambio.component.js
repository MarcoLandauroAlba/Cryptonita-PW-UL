import { Card } from "react-bootstrap";
/*
props Utilizados:
- tipoDeCliente: Solo renderiza en pantalla si es un cliente de tipo administrador (SEGURIDAD)
- lista: Lleva la lista de usuarios que cumplen con los requerimientos enviados
*/
export default function ModTCambio(props) {

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    if (props.tipoDeCliente == 1) {
        return <div className="row">
            <div className="col-md-6">
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://www.criptonoticias.com/wp-content/uploads/2019/07/Bitcoin-punto-venta-Espa%C3%B1a-Latinoam%C3%A9rica-1050x570.jpg" />
                    <Card.Body>
                        <Card.Title>
                            <div className="my-1">COMPRA DE BITCOINS</div>
                            <div className="my-3">
                                {
                                    (() => {
                                        return "S/." + ((parseFloat(props.valor)) * 3.75).toFixed(4)
                                    })()
                                }
                            </div>
                        </Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-6">
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://www.criptonoticias.com/wp-content/uploads/2018/01/Plataformas-P2P-Zelle-Criptomonedas-e1515968242132.jpg" />
                    <Card.Body>
                        <Card.Title>
                            <div className="my-1">VENTA DE BITCOINS</div>
                            <div className="my-3">
                                {
                                    (() => {
                                        return "S/." + (parseFloat(props.valor) * 3.75).toFixed(4)
                                    })()
                                }
                            </div>
                        </Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    } else {
        return <div className="h1 text-center text-danger">
            Usted no tiene permiso de estar en esta pagina
        </div>
    }
}