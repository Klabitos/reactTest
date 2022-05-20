import axios from "axios";

const api = "https://swapi.dev/api/";


export async function getAllPeople(){
    const result = await axios.get(`${api}people`)
    .then((response)=> console.log(response))
    .catch(console.log("Error al obtener los datos"));
    return result;
}

export async function getSpecificPerson(id){
    const result = await axios.get(`${api}people/${id}`)
    .then((response)=> console.log(response))
    .catch(console.log("Error al obtener los datos"));
    return result;
}