

// METODO USADO: String Split()
// let nc = Newsoft Computer empresa de servicios tecnologicos 
// nc.split(' ', 50)

function textoToArray(texto: String, separador: String) {
    return console.log(`El texto es ${texto} conversion a array: ${texto.split(separador, 50)}`) 
}

textoToArray('Newsoft Computer empresa de servicios tecnologicos', ' ')


