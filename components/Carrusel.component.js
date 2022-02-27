import { Image } from "react-bootstrap"
const Carrusel = () => {
    return (<div><h1 className='mt-4 text-center'>BITCOIN AL DÍA</h1>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card bg-dark text-white mt-4 ">
                        <Image
                            alt="..."
                            className="banner"
                            src="https://estaticos-cdn.elperiodico.com/clip/5d0a3ba8-43db-4b2f-abc9-882d8344e5d5_alta-libre-aspect-ratio_default_0.jpg"
                            thumbnail={true}
                        />
                        <div>
                            <div className='m-4' align="justify">
                                <font face='Britannic Bold'>
                                    <h2 className='m-4'> Gráfico alcista de bitcoin podría señalar disparada hacia los US$40.000</h2>
                                    <p className="card-text m-4 h5" size='5'>Últimamente se ha presentado una gran tendencia alcista en el valor del bitcoin, luego de la gran caída de un precio de 60.000 euros a
                                        aproximadamente 30.000 euros la unidad de bitcoin. Se recomienda a los usuarios tomar esta tendencia alcista con precaución debido a la volatilidad
                                        de la moneda.</p>
                                    <p className='m-4 h5'><b>Atentamente - La organización -</b></p>
                                </font>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card bg-dark text-white mt-4">
                        <Image
                            alt="..."
                            className="banner"
                            src="https://estudiotarazona.com/wp-content/uploads/2020/11/81cd82ce-2d69-417f-9c7a-324660761590-1000x500.jpg"
                            thumbnail={true}
                        />
                        <div>
                            <div className='m-5' align="justify">
                                <font face='Britannic Bold'>
                                    <h2 className='m-4'>CAMBIA TUS SOLES A BITCOINS EN NUESTRA CASA DE CAMBIO</h2>
                                </font>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div></div>);
};

export default Carrusel;