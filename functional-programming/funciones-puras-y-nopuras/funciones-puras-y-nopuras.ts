
// FUNCIONES PURAS Y NO PURAS


// Ej1: Funcion no pura
/* 
Esta accediendo a constantes externas que pueden ser modificadas y afectar el entorno
Incluso en typescript nos muestra una advertencia por que se esta declarando por fuera
de la funcion. (Es un mala practica de programacion)

Ejemplos funciones inpuras

- Random
- Algo que dependa de la fecha
- Algo dependiendo del sistema de archivos
- Las mutaciones
*/

let a: number = 10;
let b: number = 15;

function sumaInpura1() {
    let resultado = (a + b);
    return resultado;
}
console.log('Funcion no pura - Ejemplo 1 : ', sumaInpura1());


// Ej2: Funcion no pura
/*
Es inpura por que estamos usando el objeto console que es un objeto global de window
dentro de la funcion
*/
function sumaInpura2(numA: number, numB: number) {
    console.log('Funcion no pura - Ejemplo 2 :', numA + numB );
}
sumaInpura2(45, 5);


// Ej: Mutaciones (Funciones inpuras)
function mutaciones() {
    let name = 'Andres'
    
    // Mutando la variable name con otro valor
    name= 'Marco'
}



// Funcion pura
/*
Es pura porque no esta accediendo a variables fuera de su metodo o funcion y no se esta usando 
objetos globales de window dentro de ella
*/
function sumaPura(num1: number, num2: number ) { 
    let resultado = num1 + num2;
    return resultado;
}
console.log(`Funcion pura - Ejemplo 1: ${sumaPura(987, 6846)}`)