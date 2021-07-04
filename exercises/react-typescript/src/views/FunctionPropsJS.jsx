
import React, { Fragment } from 'react';

// Funcion en Javascript con Props (Declaracion 1)
function FunctionPropsJS1 (name) {
    return (
        <Fragment>
            <button> { name } </button>
        </Fragment>
    );
}

// Funcion en Javascript con Props (Declaracion 2)
function FunctionPropsJS2 (props) {
    return (
        <Fragment>
            <button> { props.name } </button>
        </Fragment>
    );
}

export default {FunctionPropsJS1, FunctionPropsJS2};