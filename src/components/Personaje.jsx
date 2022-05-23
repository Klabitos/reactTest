import '../style/Personaje.css'
import {Tag } from '@chakra-ui/react'
import * as API from "../services/starWars"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

export function Personaje(persona){

    const [planeta, setPlaneta] = useState("");

    useEffect(() => { 
        API.getPlanet(persona.homeworld).then(setPlaneta)
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
        <div className="card personaje">
             <Tag  variant='solid' colorScheme={comprobarPlaneta()} size='sm' w={20}>
                 <Link to={`/planeta/${planeta.name}`}>{planeta.name} {persona.prueba}</Link>
            </Tag> 
            <div className="card-body">
                <h2 className="card-title"> <strong>{persona.name}</strong> </h2>
                
                    <Link to={`/personaje/${persona.name}`} className="btn btn-primary"> {/* Pasamos por parametro al link el nombre de la persona*/} {/* Importante poner / para que lo coja desde la ruta inicial */}
                        <button className='btn'>Ver en detalle</button>
                    </Link>
                
                
            </div>
           
        </div>
    )
}