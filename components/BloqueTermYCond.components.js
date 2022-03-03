import { Image } from "react-bootstrap";
/*
props Utilizados:
- volver: Sirve para regresar a la page anterior mas proxima (funciona como un stack)
*/
const BloqueTermYCond = (props) => {
    return (
        <div className="row">
            <h2 className="mt-4">Términos y Condiciones</h2>
            <div className="col-lg-8 mt-4">
                <ul>
                    <li><h5>Información del sitio</h5></li>
                    <p className="text-justify">
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
                    <ul>
                        <li>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </li>
                        <li>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </li>
                        <li>
                            when an unknown printer took a galley of type and scrambled it to make a type
                        </li>
                        <li>
                            specimen book. It has survived not only five centuries, but also the leap into
                        </li>
                        <li>
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                        </li>
                        <li>
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        </li>
                        <li>
                            and more recently with desktop publishing software like Aldus PageMaker including
                        </li>
                    </ul>
                </ul>
            </div>
            <div className="col-lg-4 mt-4">
                <Image
                    src="https://www.esan.edu.pe/images/blog/2018/01/30/1500x844-terminos-condiciones.jpg"
                    thumbnail={true}
                    className="my-4"
                    alt="..."
                />
                <div className="d-grid gap-2 mx-auto">
                    <button
                        className="btn btn-primary"
                        onClick={() => { props.volver() }}
                        type="button">
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}
export default BloqueTermYCond