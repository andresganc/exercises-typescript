
// UNIONS TYPES
//  Make variables of different types

// Example 1
let value1: number | string
let value2: number | boolean


// Example 2
function convertir(value3: string | number) {

}

convertir('Peluche')
convertir(17)


// Example 3
type A = {
    uno: boolean | string
    dos: boolean | number
}

type B = {
    tres: boolean
}

let value4: A | B = {
    uno: 'Marco',
    dos: 5,
    tres: true
}