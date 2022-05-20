import * as API from "./service/starWars"
import { useState } from "react";

export function App() {

  const [people, setPeople] = useState([]);

API.getAllPeople().then(console.log)

  console.log(people)

  return (
    <div >
      <p>Hola mundo</p>
    </div>
  )
}

export default App
