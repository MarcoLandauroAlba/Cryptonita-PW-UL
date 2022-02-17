import MenuNavegacionadminregistrado from "../components/menuNavegacionAdminRegistrado.component";
import Footer from "../components/footer.component";

export default function AdminRegistradoPage() {
    return <div>
        <MenuNavegacionadminregistrado/>
        <br/>
        <div className='row'>
            <div className='col-sm-6'><br />
                <div>
                    <img className='rounded mx-auto d-block' width={300} src='https://media.ambito.com/p/17416140be9a9a34ad9ac68e1fa93ad4/adjuntos/239/imagenes/039/559/0039559218/730x0/smart/bitcoinjpg.jpg' alt='Aqui va una imagen'></img>
                </div>
            </div>
            <div className='col-sm-6'>
                <h4>Bitcoin al día</h4>
                <div className='card col-sm-8'>
                    <div className='card-body'>
                        <h6>Gráfico alcista de bitcoin podría señalar disparada hacia los US$53.000</h6>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus et arcu vitae hendrerit.
                            Duis eget tellus venenatis, fermentum velit id, mattis lectus. Fusce ac ipsum euismod, pellentesque nulla eget,
                            suscipit odio. Vestibulum eleifend lorem at hendrerit condimentum.</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}