export default function ValidadoCambioOperaciones(props){
    if (props.tipoDeCliente == 1) {
        return <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <p className="text-center">Se han validado los cambios</p>
                    </div>
                </div>
            </div>
        </div>
    }else{
        return <></>
    }
}