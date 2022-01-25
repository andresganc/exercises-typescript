
// LITERALS TYPED
// The literals typed accept an uniqued value

let verdadera: true = true

const cinco: 5 = 5

let hola: 'hola' = 'hola'

const loggedIn: 'loggedIn' = 'loggedIn'



// Case of use (API with prop op of literal type)
type APILogin = {
    op: 'login',
    username: string,
    password: string
}

let loginConnect: APILogin = {
    op: 'login',
    username: 'admin',
    password: '123456'
}