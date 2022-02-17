const Carrusel = () => {
    return (<div><h1 className='mt-4 text-center'>BITCOIN AL DÍA</h1>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card bg-dark text-white mt-4 ">
                        <img className='card-img-top' height={700} src='https://estaticos-cdn.elperiodico.com/clip/5d0a3ba8-43db-4b2f-abc9-882d8344e5d5_alta-libre-aspect-ratio_default_0.jpg' alt='Aqui va una imagen'></img>
                        <div className="card-img-overlay">
                            <div className='m-5'>
                                <div>&nbsp;</div>
                                <h2 className='m-5'> Gráfico alcista de bitcoin podría señalar disparada hacia los US$40.000</h2>
                                <font size='5'>
                                    <p className="card-text m-5" size='5' align="justify">Últimamente se ha presentado una gran tendencia alcista en el valor del bitcoin, luego de la gran caída de un precio de 60.000 euros a
                                        aproximadamente 30.000 euros la unidad de bitcoin. Se recomienda a los usuarios tomar esta tendencia alcista con precaución debido a la volatilidad
                                        de la moneda.</p>
                                    <p className='m-5'><b>Cordialmente - La organización -</b></p>
                                </font>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card bg-dark text-black mt-4 text-end">
                        <img className='card-img-top' height={700} src='https://estudiotarazona.com/wp-content/uploads/2020/11/81cd82ce-2d69-417f-9c7a-324660761590-1000x500.jpg' alt='Aqui va una imagen'></img>
                        <div className="card-img-overlay">
                            <div className='m-5'>
                                <font size='7' face='Britannic Bold'>
                                    <p className='m-5'><b>CAMBIA TUS SOLES A BITCOINS EN NUESTRA CASA DE CAMBIO</b></p>
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