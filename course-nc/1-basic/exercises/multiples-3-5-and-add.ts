

const multiples = ( numMax: number ) => {
    for (let index = 0; index <= numMax; index++) {
        
        let resto3 = index % 3 
        let resto5 = index % 5 
        
        if ( (resto3 === 0) || (resto5 === 0) ) {
            console.log(index)
        }
    }
}



multiples(10)

//console.log( multiples(10) ) 
