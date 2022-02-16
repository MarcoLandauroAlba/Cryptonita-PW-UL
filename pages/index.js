import MenuNavegacion from '../components/menuNavegacion.component'
import Footer from '../components/footer.component'
export default function Home() {
    return (
        <div>
            <MenuNavegacion />
            <div className='row'>
                <div className='col-sm-6'>
                    <img src='asd' alt='Aqui va una imagen'></img>
                </div>
                <div className='col-sm-6'>
                    Noticias sobre las criptomonedas
                </div>
            </div>
            <Footer />
        </div>
    )
}
