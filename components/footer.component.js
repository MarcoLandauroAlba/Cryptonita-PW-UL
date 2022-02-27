import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
/*
props Utilizados:
- redireccionamiento: Recibe un argumento (direccion) y te redirige al destino
*/
const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        El mejor grupo del salon :)
    </Tooltip>
);
const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Ciclo 0
    </Tooltip>
);

const Footer = (props) => {
    return (
        <footer className="card mt-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-md">
                        <div className="text-center mb-1">
                            <Button
                                variant="outline-dark"
                                onClick={() => { props.redireccionamiento('/nosotros') }}
                            >
                                Nosotros
                            </Button>
                        </div>
                        <div className="text-center mt-1 mb-1">
                            <Button
                                variant="outline-dark"
                                onClick={() => { props.redireccionamiento('/TerminosYCondiciones') }}
                            >
                                Terminos y condiciones
                            </Button>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="text-center mb-1">
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip1}
                            >
                                <Button variant="outline-dark">Grupo 1</Button>
                            </OverlayTrigger>
                            </div>
                        <div className="text-center mt-1">
                        <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip2}
                            >
                                <Button variant="outline-dark">ULIMA-2022</Button>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
