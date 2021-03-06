import { obtenerClientexNom } from "../../../../../dao/clientes"

const ClientesNombreHandler = async (req, res) => {
    if(req.method == "GET"){
        const data = req.query
        const cliente = await obtenerClientexNom(data.nombre)
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
    }
}

export default ClientesNombreHandler