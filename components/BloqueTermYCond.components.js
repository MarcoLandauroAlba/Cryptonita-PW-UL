import { Image } from "react-bootstrap";
const BloqueTermYCond = () => {
    return (
        <div className="row">
            <h2 className="mt-4">Términos y Condiciones</h2>
            <div className="col-md-8 mt-4">
                <ul>
                    <li><h5>Información del sitio</h5></li>
                    <p>
                        Sitio de cambio de criptomonedas en la región peruana
                        que busca agilizar la labor de los cambistas para establecer
                        el cambio de manera online. Página que es realizada para un
                        proyecto universitario y no está avalada como tal por un banco
                        o entidad financiera.
                    </p>
                    <li><h5>Usuarios</h5></li>
                    <p>
                        La página se compromete en la protección de los datos personales
                        y la no divulgación de algún dato sensible que pueda afectar directa
                        o indirectamente a alguno de nuestros usuarios
                    </p>
                    <li><h5>Regulaciones</h5></li>
                    <p>
                        De acuerdo a las siguientes leyes: ...
                    </p>
                </ul>
            </div>
            <div className="col-md-4 mt-4">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" onClick={() => {
                        location.href = "/"
                    }} type="button">Regresar</button>
                </div>
                <Image src="https://www.esan.edu.pe/images/blog/2018/01/30/1500x844-terminos-condiciones.jpg" thumbnail={true}
                    className="mt-4"></Image>
            </div>
        </div>
    )
}
export default BloqueTermYCond