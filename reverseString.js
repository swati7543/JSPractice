// reverse function for string

let revstr = (str) => {
    if (typeof str !== 'string') {
        throw new Error("only strings are allowed")
    }
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i]

    }
    return result;
}
// console.log(revstr("swati"))
// console.log(revstr("software development"))
// console.log(revstr(555888))

// array reverse function

let myfun = (arr) => {
    let newarr = ""
    for (let i = arr.length - 1; i >= 0; i--) {
        newarr += arr[i]
    }
    return newarr
}

// console.log(myfun([5, 2, 9, 1]))


// split function for string 

let splitstr = (str1) => {
    let newsplitstr = str1.split('')
    let s=newsplitstr.join('')
    console.log(s)
    let newstr1 = ""
    for (let i = str1.length - 1; i >= 0; i--) {
        newstr1 += newsplitstr[i]
    }
    return newstr1
}

console.log(splitstr("swati"))