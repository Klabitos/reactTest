import logo from "./assets/logo-starWars.png"
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Image } from '@chakra-ui/react'
import {Home} from './views/Home'
import {Naves} from './views/Naves'
import {Personajes} from './views/Personajes'
import {Planetas} from './views/Planetas'
import './style/style.css'
import { PersonaDetalle } from "./views/PersonaDetalle";
import { PlanetaDetalle } from "./views/PlanetaDetalle";
import { NaveDetalle } from "./views/NaveDetalle";

export  function App() {

  return (
    <div className="mainContainer">
      <Navbar/>
      <Image src={logo} alt="" height={150} width={300} className="centrado"/>  {/* Importante cerrar la tag*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personajes" element={<Personajes />} />
        <Route path="planetas" element={<Planetas />} />
        <Route path="naves" element={<Naves />} />

        <Route path="personaje/:nombre" element={<PersonaDetalle />} />
        <Route path="nave/:nombre" element={<NaveDetalle />} />
        <Route path="planeta/:nombre" element={<PlanetaDetalle />} />
      </Routes>
    </div>
  )
}

export default App
