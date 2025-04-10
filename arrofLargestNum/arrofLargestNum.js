
// kisi array me se biggest number ko check karna
// aur usko print karna


function arrofLargestNum(arr) {
    console.log(arr)
    let biggestNum = arr[0]
    arr.forEach(arrele => {
        if (arrele > biggestNum) {
            biggestNum = arrele
        }
    });
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > biggestNum) {
    //         biggestNum = arr[i]
    //     }
    // }

    return biggestNum
}
console.log(arrofLargestNum([2, 5, 7, 8]))
console.log(arrofLargestNum([3,6,1,12,3,7]))
console.log(arrofLargestNum([7,84,16,34,45,76]))


// kisi array me se smallest number ko check karna
// aur usko print karna

function arrofSmallestNum(arrofNum) {
    let smallestNumber = arrofNum[0]
    console.log(arrofNum)
    arrofNum.forEach(ele => {
        if (ele < smallestNumber) {
            smallestNumber = ele
        }
    });
    // for (let i = 1; i < arrofNum.length; i++) {
    //     if (arrofNum[i] < smallestNumber) {
    //         smallestNumber = arrofNum[i]
    //     }
    // }
    return smallestNumber
}

// console.log(arrofSmallestNum([10, 8, 9, 2]))