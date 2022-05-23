import { useParams } from "react-router-dom"

export function PlanetaDetalle(){

    const params = useParams()

    return (
        <p>El planeta {params.nombre} es bonito</p>
    )
}