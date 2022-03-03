import { Image } from "react-bootstrap";
/*
props Utilizados:
- volver: Sirve para regresar a la page anterior mas proxima (funciona como un stack)
*/
const BloqueTermYCond = (props) => {
    return (
        <div className="row">
            <h2 className="mt-4">Términos y Condiciones</h2>
            <h5 className="text-muted">Revisado por última vez: 2 de Marzo del 2022</h5>
            <div className="col-lg-8 mt-4">
                <h5>Información del sitio</h5>
                <p align="justify">
                    Estos Términos de uso de Cryptonita se celebran entre usted (en lo sucesivo, &quot;usted&quot; o &quot;tu&quot;) y los operadores de Cryptonita (como se define a continuación). Al acceder, descargar, usar o hacer clic en &quot;Acepto&quot; para aceptar cualquier Servicio de Cryptonita (como se define a continuación) proporcionado por Cryptonita (como se define a continuación), usted acepta que ha leído, entendido y aceptado todos los términos y condiciones estipulados en estos Términos de uso (en adelante, “estos Términos”). Además, al usar algunas funciones de los Servicios, puede estar sujeto a términos y condiciones adicionales específicos aplicables a esas funciones. Lea los términos detenidamente, ya que rigen su uso de los Servicios de Cryptonita. ESTOS TÉRMINOS CONTIENEN DISPOSICIONES IMPORTANTES, INCLUYENDO UNA DISPOSICIÓN DE ARBITRAJE QUE REQUIERE QUE TODAS LAS RECLAMACIONES SE RESUELVAN MEDIANTE ARBITRAJE LEGALMENTE VINCULANTE. Los términos de la disposición de arbitraje se establecen en el Artículo 10, “Resolución de disputas: foro, arbitraje, renuncia a acciones colectivas”, a continuación. Al igual que con cualquier activo, los valores de las Monedas digitales (como se define a continuación) pueden fluctuar significativamente y existe un riesgo sustancial de pérdidas económicas al comprar, vender, mantener o invertir en Monedas digitales y sus derivados. AL UTILIZAR LOS SERVICIOS DE CRYPTONITA, USTED RECONOCE Y ACEPTA QUE: (1) USTED ES CONSCIENTE DE LOS RIESGOS ASOCIADOS CON LAS TRANSACCIONES DE MONEDAS DIGITALES Y SUS DERIVADOS; (2) USTED ASUMIRÁ TODOS LOS RIESGOS RELACIONADOS CON EL USO DE LOS SERVICIOS DE CRYPTONITA Y LAS TRANSACCIONES DE MONEDAS DIGITALES Y SUS DERIVADOS; Y (3) CRYPTONITA NO SERÁ RESPONSABLE DE DICHOS RIESGOS O RESULTADOS ADVERSOS. Al acceder, usar o intentar usar los Servicios de Cryptonita en cualquier capacidad, usted reconoce que acepta y acepta estar sujeto a estos Términos. Si no está de acuerdo, no acceda a Cryptonita ni utilice los servicios de Cryptonita.
                </p>
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