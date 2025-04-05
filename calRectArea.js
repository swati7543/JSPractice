let areaofrect = (length, width) => {
    if (length <= 0) {
        throw new RangeError("Length should be positive number")
    }
    if (width <= 0) {
        throw new RangeError("width should be positive number")
    }
    let s = length * width
    console.log("area of a rectangle is", s)
}
areaofrect(2, 6)