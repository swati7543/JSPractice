function multiplicationTable(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error("Please enter valid numbers");
    }
    
    if (num1 < 0 || num2 < 0) {
        throw new Error("Numbers should be greater than zero");
    }
    
    let startNumber = num1
    let endNumber = num2
    for (let i = 1; i <= endNumber; i++) {
        let countNum = i * startNumber
        console.log(`${startNumber} * ${i}= ${countNum}`)
    }
}


// multiplicationTable(2, 10)

// multiplicationTable(3, 10)
// multiplicationTable(4, 10)
multiplicationTable(5, 20)

function multiplicationTable2(startNumber, endNumber) {
    let multiplier = 1

    for (let i = startNumber; i <= startNumber * endNumber; i = i + startNumber) {
        console.log(`${startNumber} * ${multiplier}= ${i}`)
        multiplier++
    }
}
console.log('multiplicationTable2')
// multiplicationTable2(5, 10)
// multiplicationTable2(8, 20)
