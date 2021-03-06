import { Heading} from '@chakra-ui/react'
import { Personaje } from '../components/Personaje'
import { useState, useEffect } from "react";
import * as API from "../services/starWars"
import '../style/style.css'

export function Personajes(){

    const [people, setPeople] = useState([]);


    useEffect(()=>{
      API.getAllPeople().then((data)=>setPeople(data.results)).catch(console.log);
    },[]);


    return(
        <>
            <Heading as='h1' className="mt-3">Personajes</Heading>   
            {people.length<1?
                <p>Loading...</p>
            :<ul className="listaPersonajes">
                {people.map((persona)=>(
                    <Personaje key={persona.name} persona={persona} prueba="*" className="mt-2 ms-1 me-1 "/>  
                ))} {/* Distintas maneras de props*/}

                 {/* También podemos añadir props pasando todas las propiedades de persona separadas en vez de dentro de un objeto persona*/}
                 {/* Para ellos simplemente ponemos {...persona} asi dentro del componente iran en el props, en vez de en props.persona */}
            </ul>}
        </>
    )
}