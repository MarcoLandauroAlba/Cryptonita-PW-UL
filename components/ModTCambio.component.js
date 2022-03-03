/*
props Utilizados:
- tipoDeCliente: Solo renderiza en pantalla si es un cliente de tipo administrador (SEGURIDAD)
- lista: Lleva la lista de usuarios que cumplen con los requerimientos enviados
*/
export default function ModTCambio(props) {

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    if (props.tipoDeCliente == 1) {
        return <div className="row">
            <div>
                Precio BTC Compra: 
                {
                    (() => {
                        return "$"+parseFloat(props.valor)
                    })()
                }<br/>
                Precio BTC Venta:
                {
                    (() => {
                        return "$"+ (parseFloat(props.valor)*(1+0.005))
                    })()
                }<br/>
                Ambos valores se actualizan cada 30s
            </div>
        </div>
    } else {
        return <div className="h1 text-center text-danger">
            Usted no tiene permiso de estar en esta pagina
        </div>
    }
}