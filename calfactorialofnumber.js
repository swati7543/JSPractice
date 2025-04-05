let findFactorial = (num) => {
    if (num < 0) {
        throw new Error("input number should be number and greater than aur equal to zero")
    }
    if (typeof num === 'string') {
        throw new Error("input number should be number ")
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i
    }
    return result
}

console.log("Factorial of 3! is", findFactorial(3))
console.log("Factorial of 4! is", findFactorial(4))



// factorial calculate using Recursion

let calculatefactorialusingRecursion = (inputnum) => {
    if (inputnum < 0) {
        throw new Error("input number should be greater than aur equal to zero")
    }
    if (typeof inputnum === 'string') {
        throw new Error("input number should be number ")
    }
    if (inputnum === 0 || inputnum === 1) {
        return 1
    }
    return inputnum * calculatefactorialusingRecursion(inputnum - 1)
}


console.log("Factorial of 3! is", calculatefactorialusingRecursion(3))
console.log("Factorial of 4! is", calculatefactorialusingRecursion(5))



let num = 5;
let result = 1
for (i = num; i >= 1; i--) {
     result = result * i
}
console.log(
    "prashant result",
    result
)