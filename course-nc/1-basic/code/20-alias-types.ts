
// ALIAS TYPES
// You can declarate type aliases for especific uses

// Assign type with other names
type Numero = number
let num1: Numero = 3


// Assing a name to an object
type LoginCredentials1 = {
    username: string,
    password: string
}

function login1(data: LoginCredentials1) {
    data.username = 'Marco'
    data.password = '123456'
}


// Assing a name to an object ( this have a optional props )
type LoginCredentials2 = {
    username: string,
    password: string
}

function login2(data: LoginCredentials2) {
    data.username = 'Marco'
    data.password = '123456'
}

