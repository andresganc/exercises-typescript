
/* 
Object entries
    - Se agrego para manejar y administrar los datos recibidos desde una API

*/

// Simulando Datos de API
const dataTS = {
    design: 'Alejandra',
    frontend: 'Jenny',
    backend: 'Andres'
}

const entriesTS = Object.entries(dataTS);
console.log(entriesTS)