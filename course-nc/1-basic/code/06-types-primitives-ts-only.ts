
// TIPOS DE DATOS PRIMITIVOS - EXCLUSIVOS TYPESCRIPT
    // Tipos de datos primitivos que solo estan en Typescript
    // Los tipos de datos deben de ir en minusculas
    // PRIMITIVOS: Se accede directamente al valor.


    // unknown ( Recibe cualquier tipo de datos - Muy usado para las API's )
    let unknown1: unknown = 'Andres'
    let unknown2: unknown = 5

    // any
        /*  En algunas situaciones, no todo el tipo de información está disponible o 
            su declaración requeriría un esfuerzo inadecuado. 
            Estos pueden ocurrir para valores de código que se ha escrito sin TypeScript o una biblioteca de terceros. 
            En estos casos, es posible que deseemos excluirnos de la verificación de tipos. 
            Para hacerlo, etiquetamos estos valores con cualquier tipo:
        */
    let any1: any
    any1 = 'Giraldo'
    any1 = 42
    console.log(any1)


    // null & undefined ( Parecido a null con excepcion de que este se puede )
    let nada: null = null
    let indefinido: undefined = undefined


    // Void
    // Vacio - Nada
    let nada2: void = undefined;


    // tuple ( Array con tipos de datos mesclados )
    // enum
    // void
    // never





   