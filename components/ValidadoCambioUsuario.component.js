/*
props Utilizados:
- tipoDeCliente: Solo renderiza en pantalla si es un cliente de tipo administrador (SEGURIDAD)
*/
export default function ValidadoCambioUsuario(props) {
    if (props.tipoDeCliente == 1) {
        return <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <p className="peru">Se han validado los cambios</p>
                    </div>
                </div>
            </div>
        </div>
    }else{
        return <></>
    }

}