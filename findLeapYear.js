let isLeapYear = (inpyear) => {
    if (typeof inpyear === 'string') {
        throw new Error("inputnumber should be number")
    }
    if (inpyear <= 0) {
        throw new Error("inputnumber should be greater than aur equal to zero")
    }
    if ((inpyear % 4 === 0 && inpyear % 100 !== 0) || inpyear % 400 === 0) {
        return true
    }
    return false

}

console.log( "isLeapYear 1900 :",isLeapYear(1900))
console.log( "isLeapYear 2023 :",isLeapYear(2023))
console.log("isLeapYear 2033 :",isLeapYear(2033))
 
console.log("isLeapYear 2000 :",isLeapYear(2000))
console.log("isLeapYear 2004 :",isLeapYear(2004))
console.log("isLeapYear 2024 :",isLeapYear(2024))