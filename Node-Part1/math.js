const PI = 3.14159;

const add = (x, y) => {
    return (x + y);
}

const multiply = (x, y) => {
    return (x * y);
}

const square = (x) => {
    return (x * x);
}

const math = {
    add: add,
    PI: PI,
    square: square,
    multiply: multiply
}

module.exports = math;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;