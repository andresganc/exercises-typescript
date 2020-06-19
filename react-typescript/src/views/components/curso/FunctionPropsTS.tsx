

import React, { Fragment } from 'react';

// Interface es la propiedad que nos da TypeScript para declaraciones
interface HelloProps {
    name: string;        // Props requerido
    lasname?: string;     // No requerido ? 
}


// Funcion en Typescript con Props (Declaracion 1)
function FunctionPropsTS1 ({name}: {name: String}) {
    return (
        <Fragment>
            <button> { name } </button>
        </Fragment>
    );
}

// Funcion en Typescript con Props (Declaracion 2)
function FunctionPropsTS2 (props: {name: string}) {
    return (
        <Fragment>
            <button> { props.name } </button>
        </Fragment>
    );
}

// Funcion en Typescript con Props pero declarada por una interface (Declaracion 3 - RECOMENDADA)
function FunctionPropsTS3 ({name}: HelloProps) {
    return (
        <Fragment>
            <button> { name } </button>
        </Fragment>
    );
}



export default {FunctionPropsTS1, FunctionPropsTS2, FunctionPropsTS3};