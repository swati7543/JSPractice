
let findSmallnum = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    }
    else if (b < a && b < c) {
        return b;
    }
    else if (c < a && c < b) {
        return c;
    }
    return a;
}

let findLargestnum = (a1, b1, c1) => {
    if (a1 > b1 && a1 > c1) {
        return a1;
    }
    else if (b1 > a1 && b1 > c1) {
        return b1;
    }
    else if (c1 > a1 && c1 > b1) {
        return c1;
    }

    return a1;
}

console.log(findLargestnum(5,8,1))
console.log(findSmallnum(2, 6, 9))