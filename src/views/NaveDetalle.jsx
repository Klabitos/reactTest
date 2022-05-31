import { useState } from "react"
export function NaveDetalle(props){

    const [naveSize, setSize] = useState(window.innerWidth);




    return(
        <p>Nombre de la nave: {props.name}, tamaño {naveSize}</p>
    )
}