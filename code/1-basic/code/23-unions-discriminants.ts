
// UNIONS DISCRIMINANTS
// These have a common property (tipo), But can discriminate when required 

type OperacionSuma = {
    sumando1: number,
    sumando2: number,
    tipo: 'suma'
}

type OperacionMultiplicar = {
    operando1: number,
    operando2: number,
    tipo: 'multiplicar'
}


type Operacion = OperacionSuma | OperacionMultiplicar


function operar(o: Operacion) {
    if (o.tipo === 'suma') {
        return o.sumando1 + o.sumando2
    } else if (o.tipo === 'multiplicar') {
        return o.operando1 * o.operando2
    }
}

