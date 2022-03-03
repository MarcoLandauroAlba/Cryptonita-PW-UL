import { obtenerClientexCorr } from "../../../../../dao/clientes"
import { obtenerClientexCorr2 } from "../../../../../dao/clientes"



const ClientesCorreoHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.query
        const cliente = await obtenerClientexCorr(data.correo)
        const clientesconEstado = []
        for(let cl of cliente){
            let estado = ""
            if(cl.estado == true){
                estado = "Validado"
            }
            else{
                estado = "Por Validar"
            }
            clientesconEstado.push({
                id: cl.id,
                nombre: cl.nombre,
                apellido: cl.apellido,
                dni: cl.dni,
                correo: cl.correo,
                telefono: cl.telefono,
                estado: estado,
                createdAt: cl.createdAt,
                updatedAt: cl.updatedAt
            })
        }
        res.json({
            msg: "",
            cliente : clientesconEstado
        })
    }else if(req.method == 'OPTIONS'){
        const data = req.query
        const cliente = await obtenerClientexCorr2(data.correo)
        res.json({
            msg: "",
            cliente : cliente
        })
    }
}

export default ClientesCorreoHandler