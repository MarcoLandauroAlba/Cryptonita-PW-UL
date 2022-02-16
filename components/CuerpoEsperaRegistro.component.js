import { Image } from "react-bootstrap"

const CuerpoEsperaRegistro = () => {
    return <div>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-5">
                <h2 className="mt-4">Su cuenta está siendo validada, <br />por
                    favor espere unos minutos
                </h2>
                <Image src="http://1.bp.blogspot.com/_vrSyhLoesHU/TPkHq0hmdOI/AAAAAAAABR8/zbsB-WWhf4g/s1600/cargao.gif" alt="Aquí va una imagen referente a la espera"
                    thumbnail={true} className="imagenEspera mt-4"></Image>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>

}

export default CuerpoEsperaRegistro