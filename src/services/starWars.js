const api = "https://swapi.dev/api/";


export async function getAllPeople(){
    const response = await fetch(`${api}people`);
    const data = await response.json();
    console.log(data) //HACEMOS CONSOLE LOG PARA VER EL FORMATO DE LA REPSUESTA
    return data;
}

export async function getPlanet(url){
    const response = await fetch(`${url}`);
    const data = await response.json();
    //console.log(data) 
    return data;
}

export async function getWithURL(){

}

