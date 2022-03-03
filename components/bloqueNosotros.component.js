import { Button, Card, Image } from "react-bootstrap";
/*
props Utilizados:
- volver: Sirve para regresar a la page anterior mas proxima (funciona como un stack)
*/
const BloqueNosotros = (props) => {
    return (
        <div>
            <h2>Nosotros</h2>
            <div className="row">
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6">
                <Card.Img variant="top" src="https://i.pinimg.com/236x/32/28/d3/3228d36a72d1dd13a7580e34949d8185.jpg" />
                <Card.Body>
                    <Card.Title>Mauricio Alejandro Aguirre Izaguirre</Card.Title>
                    <Card.Text>
                        Despliega su forma demoniaca, aterroriza a los súbditos enemigos cercanos, y obtiene daño de ataque, curación aumentada y velocidad de movimiento. Si participa en un derribo, estos efectos extienden su duración.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6">
                <Card.Img variant="top" src="/images/WhatsApp_Image_2022-02-17_at_2.52.22_PM.jpeg" />
                <Card.Body>
                    <Card.Title>Sergio David Flores Tavara</Card.Title>
                    <Card.Text>
                        Es un alma solitaria y melancólica de la vieja Shurima que vaga por el mundo en busca de un amigo. Maldito por un hechizo ancestral, está condenado a permanecer solo para siempre, pues su tacto es muerte y su cariño es la perdición.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6">
                <Card.Img variant="top" src="https://scontent.flim16-2.fna.fbcdn.net/v/t31.18172-8/23270526_136620217096953_391130970073795505_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeETf0K1o3JSphSMXMJzSPHRNggPPGwsXcs2CA88bCxdy-nXUf7o54TyZQZ112PS-qkq927kYkNx55ldc_SA7D-l&_nc_ohc=d_Ibt48SDRQAX-42JxO&_nc_ht=scontent.flim16-2.fna&oh=00_AT_inI4djHHj1ZEPeHRXNljZ5NY2rBOgmIxpz_nLKLQ4LA&oe=6234D381" />
                <Card.Body>
                    <Card.Title>Marco Antonio Landauro Alba</Card.Title>
                    <Card.Text>
                        En japonés, Akali se lee como Akari (明), que significa "la luz, brillante, alegre," en contraste con su título, "El Puño de Sombra". En el sijismo, Akali es una palabra que se utiliza para referirse a alguien o algo que es "divino".
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-2  col-lg-3 col-sm-6">
                <Card.Img variant="top" src="https://i.pinimg.com/236x/32/28/d3/3228d36a72d1dd13a7580e34949d8185.jpg" />
                <Card.Body>
                    <Card.Title>Jean Pierre Soto Tipacti</Card.Title>
                    <Card.Text>
                        Es un espíritu benevolente alado que soporta interminables ciclos de vida, muerte y resurrección para proteger Fréljord. Nació de la unión del hielo cruel y del viento penetrante, por lo que es una semidiosa que utiliza esos poderes elementales para frustrar a quien se atreva a perturbar su tierra natal.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
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