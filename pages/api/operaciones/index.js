import { guardarOperacion, obtenerOperaciones, obtenerOperacion, editarOperacion } from "../../../dao/operaciones"

const operacionesIdHandler = async (req, res) => {
    if (req.method == "GET") {
        const data = req.query
        const operacion = await obtenerOperacion(data.id)
        res.json({
            msg: "",
            operacion : operacion
        })
    }else if(req.method == "SHOW"){
        const operaciones = await obtenerOperaciones()
        res.json({
            msg: "",
            operaciones:operaciones
        })
    }else if(req.method == "POST"){
        const data = req.query
        const operacion = await guardarOperacion(data)
        console.log("Se guardara el proyecto con id " + data.id)
        res.json({
            msg: "",
            operacion:operacion
        })
    }else if (req.method == "PUT"){
        const data = req.query
        const operacion = await editarOperacion(data)
        console.log("Se modificara el proyecto con id " + data.id)
        res.json({
            msg: "",
        })
    }
}

export default operacionesIdHandler