import { obtenerOperacion } from "../../../../dao/operaciones";

const operacionIdHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.query
        const operacion = await obtenerOperacion(data.id)
        res.json({
            msg: "",
            operacion : operacion
        })
    }
}

export default operacionIdHandler