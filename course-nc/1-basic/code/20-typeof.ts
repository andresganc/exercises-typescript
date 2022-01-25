
/*
Typeof Type Operator

- JavaScript already has a typeof operator you can use in an expression context:

*/

// TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:

let s = "hello";
let n: typeof s;
   
//let n: string


/* 
This isn’t very useful for basic types, but combined with other type operators, you can use typeof to conveniently express many patterns. 
For an example, let’s start by looking at the predefined type ReturnType<T>. It takes a function type and produces its

return type:
*/

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
    
//type K = boolean


/* 
Example 1: Function that add num1 + num2 given types number or string

1. The function check if is number or string with the command typeof 
2. Convert this string to number with parseInt and add
*/
const funTypeof = (num1: number | string, num2: number | string): number => {

    if (typeof(num1) === 'string') {
        num1 = parseInt(num1)
    }

    if (typeof(num2) === 'string') {
        num2 = parseInt(num2)
    }

    return num1 + num2

}

console.log(funTypeof(45, '485'))



