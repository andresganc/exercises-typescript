
function factorialTS(n: number) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorialTS(n - 1)
    }
}

console.log(factorialTS(5))