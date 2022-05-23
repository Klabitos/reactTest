import { useState, useEffect } from "react";
import * as API from "./services/starWars"
import logo from "./assets/logo-starWars.png"
import { Heading,  Image,  } from '@chakra-ui/react'
import { Personaje } from './components/Personaje'
import { Navbar } from "./components/Navbar";
import './style/style.css'

export  function App() {

  const [people, setPeople] = useState([]);


  useEffect(()=>{
    API.getAllPeople().then((data)=>setPeople(data.results)).catch(console.log);
  },[]);
  
  return (
    <div className="mainContainer">
      <Navbar/>
      <Image src={logo} alt="" height={150} width={300} className="centrado"/>  {/* Importante cerrar la tag*/}
      <Heading as='h1' className="mt-3">Personajes</Heading>      
      {people.length<1?
        <p>Loading...</p>
      :<ul className="listaPersonajes">
        {people.map((persona)=>(
            <Personaje key={persona.name} {...persona} prueba="*" className="mt-2 ms-1 me-1 "/>  
          ))} {/* Distintas maneras de props*/}
      </ul>}
      
    </div>
  )
}

export default App
