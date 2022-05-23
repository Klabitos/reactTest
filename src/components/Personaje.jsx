import '../style/Personaje.css'
import {Tag } from '@chakra-ui/react'
import * as API from "../services/starWars"
import { useState, useEffect } from 'react'

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
                <a href="">{planeta.name} {persona.prueba}</a>
            </Tag> 
            <div className="card-body">
                <h2 className="card-title"> <strong>{persona.name}</strong> </h2>
                <a href="#" className="btn btn-primary">Ver en detalle</a>
            </div>
           
        </div>
    )
}