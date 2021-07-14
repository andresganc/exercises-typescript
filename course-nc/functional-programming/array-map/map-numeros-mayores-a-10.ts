
// La programacion funcional evita procesos imperativos

// Objetivo del ejercicio: Contar cuantos numeros del array numeros son mayores a 10

let numeros3: number[] = [ 8, 856, 4, 6, 98 ];



// Solucion imperativa
let contador: number = 0;

for (let i:number =0; i < numeros3.length; i++ ) {
    let numero: number = numeros3[i];
    console.log(numero)
    if ( numero > 10 ){
        contador ++;
    }
}
console.log( "Solucion imperativa / Los numero mayores a 10 fueron : ", contador );



// Solucion declarativa con map
var resultado = numeros3.map().filter(n => n => 10 ).count();
console.log( "Solucion declarativa / Los numero mayores a 10 fueron : ", resultado )