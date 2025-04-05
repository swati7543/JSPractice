function sumOfDigits(num) {
    if (num < 0) {
        throw new Error("number should be greater than zero ")
    }
    if (typeof num === 'string') {
        throw new Error("strings are not allowed only numbers are allowed")
    }
    let newnum = num.toString()
    let numsplit = newnum.split("")
    let sumOfDigits = 0
    numsplit.forEach(num => {
        sumOfDigits = sumOfDigits + parseInt(num)
    })
    return sumOfDigits
}

// console.log(sumOfDigits(56))
// console.log(sumOfDigits(5556))

// another way to calculate the sum of digits

function sumOfDigits2(inpnum) {
    let number = inpnum
    let summofdigit = 0
    while (number > 0) {
        let lastdigit = number % 10
        number = Math.floor(number / 10)
        console.log("last digit", lastdigit, "New number", number)
        summofdigit = summofdigit + lastdigit
    }
    return summofdigit
}

console.log(sumOfDigits2(123))