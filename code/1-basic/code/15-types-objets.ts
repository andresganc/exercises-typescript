
// TYPES OBJECTS
// Way to declare an object in typescript

let people1: {
    name: string,
    lastname: string,
    age: number,
    country: string,
    date_birth: Date,
} = {
    name: 'Marco',
    lastname: 'Giraldo',
    age: 3,
    country: 'Colombia - USA',
    date_birth: new Date(2017, 12, 20)
}

console.log(people1.name)


// Way to declare with an object inside
let people2: {
    name: string,
    lastname: string,
    age: number,
    country: string,
    date_birth: Date,
    state: boolean,
    school: {
        name_school: string,
        course: string 
    }
} = {
    name: 'Marco',
    lastname: 'Giraldo',
    age: 3,
    country: 'Colombia - USA',
    date_birth: new Date(2017, 12, 20),
    state: true,
    school: {
        name_school: 'Caritas felices',
        course: 'Transicion' 
    }
}

console.log(people2.name)


// Untyped object shape (does not autocomplete the object)
let people3: object = {
    name: 'Marco',
    lastname: 'Giraldo',
    age: 3,
    country: 'Colombia - USA',
    date_birth: new Date(2017, 12, 20)
}

// console.log(people3.age)