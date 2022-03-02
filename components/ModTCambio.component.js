/*
props Utilizados:
- tipoDeCliente: Solo renderiza en pantalla si es un cliente de tipo administrador (SEGURIDAD)
- lista: Lleva la lista de usuarios que cumplen con los requerimientos enviados
*/
export default function ModTCambio(props) {

    if (props.tipoDeCliente == 1) {
        return <div className="row">
            <div>
                Precio Criptomoneda:
                {
                    (() => {
                        return props.valor
                    })()
                }
            </div>
        </div>
    } else {
        return <div className="h1 text-center text-danger">
            Usted no tiene permiso de estar en esta pagina
        </div>
    }
}