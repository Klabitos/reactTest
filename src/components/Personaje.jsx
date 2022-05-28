import '../style/Personaje.css'
import {Tag } from '@chakra-ui/react'
import * as API from "../services/starWars"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

export function Personaje(props){


    //se suele usar object destructuring con las props se puede poner que nos llegan props y luego de props cogemos lo que sea
    // O se puede crear variables con las cosas. En nuestro ejemplo comentado tendriamos ahora la variable persona y prueba
    //Pero también podríamos hacer en la funcion Personaje({persona, prueba}){ y seria lo mismo
    /*
    const {persona, prueba} = props
    */
    const [planeta, setPlaneta] = useState("");

    useEffect(() => { 
        API.getPlanet(props.persona.homeworld).then(setPlaneta)
    }, []);


    function comprobarPlaneta(){
        switch (planeta.name) {
            case "Tatooine":
                return 'red'
            case "Alderaan":
                return 'facebook'
            case "Naboo":
                return 'twitter'
            case "Stewjon":
                return 'yellow'
            default:
                return 'whiteAlpha'
        }
    }

    return(
        <div className="card personaje" onClick={console.log("MOUSE OVER")}> {/* El problema es que esto se ejecuta nada mas cargar la aplicación, entonces para evitar eso la hacemos arrow function como vemos debajo */}
             <Tag  variant='solid' colorScheme={comprobarPlaneta()} size='sm' w={20}>
                 <Link to={`/planeta/${planeta.name}`}>{planeta.name} {props.prueba}</Link>
            </Tag> 
            <div className="card-body">
                <h2 className="card-title" onClick={() => console.log("MOUSE OVER 2")}> <strong>{props.persona.name}</strong> </h2>
                
                    <Link to={`/personaje/${props.persona.name}`} className="btn btn-primary"> {/* Pasamos por parametro al link el nombre de la persona*/} {/* Importante poner / para que lo coja desde la ruta inicial */}
                        <button className='btn'>Ver en detalle</button>
                    </Link>
                
                
            </div>
           
        </div>
    )
}