import { Image } from "react-bootstrap";
/*
props Utilizados:
- volver: Sirve para regresar a la page anterior mas proxima (funciona como un stack)
*/
const BloqueNosotros = (props) => {
    return (
        <div className='row'>
            <h2>Nosotros</h2>
            <div className='col-md-8 mt-4'>
            
                <ul>
                    <li>Mauricio Alejandro Aguirre Izaguirre <br />
                        <Image
                            src="https://i.pinimg.com/236x/32/28/d3/3228d36a72d1dd13a7580e34949d8185.jpg"
                            thumbnail={true}
                            width={150}
                            alt="..."
                        />
                    </li>
                    <li>Sergio David Flores Tavara <br />
                        <Image
                            src="/images/WhatsApp_Image_2022-02-17_at_2.52.22_PM.jpeg"
                            thumbnail={true}
                            width={150}
                            alt="..."
                        />
                    </li>
                    <li>Marco Antonio Landauro Alba <br />
                        <Image
                            src="https://scontent.flim16-2.fna.fbcdn.net/v/t31.18172-8/23270526_136620217096953_391130970073795505_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeETf0K1o3JSphSMXMJzSPHRNggPPGwsXcs2CA88bCxdy-nXUf7o54TyZQZ112PS-qkq927kYkNx55ldc_SA7D-l&_nc_ohc=d_Ibt48SDRQAX-42JxO&_nc_ht=scontent.flim16-2.fna&oh=00_AT_inI4djHHj1ZEPeHRXNljZ5NY2rBOgmIxpz_nLKLQ4LA&oe=6234D381"
                            thumbnail={true}
                            width={150}
                            alt="..."
                        />
                    </li>
                    <li>Jean Pierre Soto Tipacti <br />
                        <Image
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlZZjrTfJH9VfA2zA6tpz3gAIV8tE3NOyhQ&usqp=CAU'
                            thumbnail={true}
                            width={150}
                            alt="..."
                        />
                    </li>
                </ul>
            </div>
            <div className="col-md-4 mt-4">
                <div className="d-grid gap-2 col-6 mx-auto">
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
export default BloqueNosotros