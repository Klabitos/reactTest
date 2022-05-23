import { useParams } from "react-router-dom";

export function PersonaDetalle(props){

    const params = useParams(); {/* Tiene todos los parametros de la URL, mientras que props es lo que le pasamos a mano */}
    return (
        <p>PersonaDetalle {params.nombre}</p> 
    );
}