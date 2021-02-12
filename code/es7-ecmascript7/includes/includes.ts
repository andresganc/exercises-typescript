
/*
Includes
    - Se usa para saber si algun valor esta incluido en un array
    - Anteriormente se usaba indexof
*/

let numbersTS: number[] = [ 1, 2, 3, 7, 8 ]

if ( numbersTS.includes(7) ) {
    console.log('El numero 7 si esta incluido')
} else {
    console.log('No se encuentra el numero en el array')
}