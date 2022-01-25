

// FUNCIONES CON TYPES

// Funcion sumar con parametros & tipos (num1 , num2)
function sumar1( num1: number, num2: number ) {

    let resultado = num1 + num2
    
    return resultado

}

console.log( sumar1(5, 8) )



function sumar2( num1: number, num2: number ): number {

    let resultado = num1 + num2
    console.log(`${num1} + ${num2} = ${resultado}`)

    return resultado

}

sumar2(87, 689)



