
/* 
Object values
    - Object values deveulve la valores de un objeto a una matriz.
    
*/

// Objeto
const dataTS= {
    designUI: 'Aleja',
    frontend: 'Jenny',
    backend: 'Andres',

}

// Paso de los objetos a la matriz
const valuesTS = Object.values(dataTS);
console.log(valuesTS);

// Podemos ver tambien la cantidad de elementos de la matriz
console.log(valuesTS.length)