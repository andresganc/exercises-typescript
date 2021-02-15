
/* 
Object entries
   - Object entries devuelve la clave y los valores de una matriz.

*/

// Ejemplo 1
// Matriz
const dataTS: string[] = {
    design: 'Alejandra',
    frontend: 'Jenny',
    backend: 'Andres'
}

const entriesTS = Object.entries(dataTS);
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entriesTS)