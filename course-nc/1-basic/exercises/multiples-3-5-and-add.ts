

const multiplesAdd = ( numMax: number ) => {

    let total: number = 0;

    for (let index = 0; index <= numMax; index++) {
        
        let resto3 = index % 3 
        let resto5 = index % 5 
        
        if ( (resto3 === 0) || (resto5 === 0) ) {
            console.log(` Num Multiplo de 3 o 5 = ${index} `)

            total += index;

            console.log(`Sumatoria = ${total} `)
        }
    }
}

multiplesAdd(10)

//console.log( multiples(10) ) 
