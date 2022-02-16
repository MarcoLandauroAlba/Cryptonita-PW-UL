import { Image } from "react-bootstrap"

const ConfirmacionRegistro = () => {
    return <div>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <h2 className="mt-4 peru">¡Su cuenta ha sido validada exitosamente!</h2>
                <br/>
                <p className="peru">Gracias por su preferencia</p>
                <Image src="https://c.tenor.com/Hw7f-4l0zgEAAAAC/check-green.gif" alt="Aquí va una imagen referente a la espera"
                    thumbnail={true} className="mt-4" id="imagenConfirmacion"></Image>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
}

export default ConfirmacionRegistro