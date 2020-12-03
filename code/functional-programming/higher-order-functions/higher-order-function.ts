
// ====== HIGHER ORDER FUNCTIONS - FUNCIONES DE ALTO ORDEN ========
/*
Las funciones de alto orden son funciones que contienen
y devuelven otras funciones realizando una tarea 
Se usa mucho para crear constructores de funciones que hagan
trabajos y tareas.
*/

// Ej: Funcion que crea un correo en varios proveedores pasandole solo el nombre

function crearCorreoTS(proveedorCorreo: String) {
    return function (nombreUsuario: String) {
        return `${nombreUsuario}@${proveedorCorreo}`
    }
}

let crearCorreoGmailTS = crearCorreoTS('gmail')
let crearCorreoOutlookTS = crearCorreoTS('outlook')

console.log(crearCorreoGmailTS('andres'))
console.log(crearCorreoOutlookTS('andres'))