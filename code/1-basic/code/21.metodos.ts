
// =========================== METODOS ============================

/*
los metodos son bloques de codigo que suelen estar dentro de una clase
*/

// Salta error porque un metodo no puede estar fuera de una clase.
/*
resta(){
   console.log("Hola"); 
}
*/

/*
function operacionesMatematicas () {
    metodoSuma(
        console.log("Hola metodo suma")
    );
        // Codigo aqui


    metodoResta(
        console.log("Hola metodo resta")
    );     
}
*/


// Clase carro1 (Objeto carro1)
class classCarro2 {

    puertaColor: string
    ruedasTamaño: string
    ventanas: string
    motor: number
    
    constructor(thePuertaColor: string, theRuedasTamaño: string, theVentanas: string, theMotor: number){
        this.puertaColor = thePuertaColor;
        this.ruedasTamaño = theRuedasTamaño;
        this.ventanas = theVentanas;
        this.motor = theMotor;
    }    
    
    // Metodo
    arrancar(){
        // Codigo aqui
    }

    // Metodo con return
    acelerar(){
        // Codigo aqui
        return ("Velocidad : " );
    }

    // Metodo esatico con return
    static frenar(){
        // Codigo aqui
        return;
    }

}

// Instanciar Clase carro1
var carro2 = new classCarro2('Verde', 'Pequeñas', 'Electricas', 1400)

// Reasignar color de la puerta
carro2.puertaColor = "Amarilla";

console.log (`Carro 2 / Color puerta:", ${carro2.puertaColor} - Ruedas tamaño: ${carro2.ruedasTamaño} - Ventanas: ${carro2.ventanas} - Motor: ${carro2.motor} cc`)