import { useState } from "react";
export function Naves(){
    const [naveSize, setSize] = useState(window.innerWidth);

    const changeWidth = () => {
        setSize(window.innerWidth)
    }

    window.addEventListener("resize", changeWidth)

    return (
        <p>Naves, tamaño {naveSize}</p>
    )   
}