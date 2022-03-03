import { Button, Card, Image } from "react-bootstrap";
/*
props Utilizados:
- volver: Sirve para regresar a la page anterior mas proxima (funciona como un stack)
*/
const BloqueNosotros = (props) => {
    return (
        <div>
            <h2 className="mt-3">Nosotros</h2>
            <div className="row d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6 text-white bg-primary bg-opacity-75">
                <Card.Img className="mt-2" variant="top" src="images\IMG_20220227_120826_380.jpg" />
                <Card.Body>
                    <Card.Title>Mauricio Alejandro Aguirre Izaguirre</Card.Title>
                    <Card.Text align="justify">
                    Estudiante del septimo ciclo de la carrera de Ingeniería de Sistemas de la Universidad de Lima (medio superior). Con conocimientos de programación de Python, Java,C y Ruby. Orientado hacía el area de Administracion y diseño de Redes. Dominio de inglés (nivel intermedio-avanzado)
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6 text-white bg-primary bg-opacity-75">
                <Card.Img className="mt-2" variant="top" src="/images/WhatsApp_Image_2022-02-17_at_2.52.22_PM.jpeg" />
                <Card.Body>
                    <Card.Title>Sergio David Flores Távara</Card.Title>
                    <Card.Text align="justify">
                    Estudiante del septimo ciclo de la carrera de Ingeniería de Sistemas de la Universidad de Lima (décimo superior). Con conocimientos de programación de Python, Java, C++, SQL, PL/SQL. Orientado al desarrollo de software y sistemas de información. Dominio de inglés y manejo de Excel como de Wordpress a nivel avanzado.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6 text-white bg-primary bg-opacity-75">
                <Card.Img className="mt-2" variant="top" src="https://scontent.flim16-2.fna.fbcdn.net/v/t31.18172-8/23270526_136620217096953_391130970073795505_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeETf0K1o3JSphSMXMJzSPHRNggPPGwsXcs2CA88bCxdy-nXUf7o54TyZQZ112PS-qkq927kYkNx55ldc_SA7D-l&_nc_ohc=d_Ibt48SDRQAX-42JxO&_nc_ht=scontent.flim16-2.fna&oh=00_AT_inI4djHHj1ZEPeHRXNljZ5NY2rBOgmIxpz_nLKLQ4LA&oe=6234D381" />
                <Card.Body>
                    <Card.Title>Marco Antonio Landauro Alba</Card.Title>
                    <Card.Text align="justify">
                        Estudiante de Ingeniería en Sistemas de la Universidad de Lima (décimo superior) y voluntario IEEE. Habilidades en desarrollo frontend, C++, Java y Python. Orientado al Desarrollo de aplicaciones web. Bilingüe. Conocimientos avanzados de Microsoft Office, capacidad de liderazgo y responsabilidad. Futbolista de la Universidad de Lima.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6 text-white bg-primary bg-opacity-75">
                <Card.Img className="mt-2" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlZZjrTfJH9VfA2zA6tpz3gAIV8tE3NOyhQ&usqp=CAU" />
                <Card.Body align="justify">
                    <Card.Title>Jean Pierre Soto Tipacti</Card.Title>
                    <Card.Text>
                    Estudiante del septimo ciclo de la carrera de Ingeniería de Sistemas de la Universidad de Lima (décimo superior). Enfocado en el manejo de data y al desarrollo de videojuegos. Persona altamente responsable y persistente que aprende de manera rápida.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="btn-lg d-flex justify-content-center">
                <button
                    className="btn btn-primary"
                    onClick={() => { props.volver() }}
                    type="button">
                    Regresar
                </button>
            </div>
        </div>

    )
}
export default BloqueNosotros