
const add = (a, b) => {
    return a + b;
}

const multiply = (a, b) => {
    return a * b;
}

const subtract = (a, b) => {
    return a - b;
}

const divide = (a, b) => {
    if (b == 0) {
        return "Cannot divide by zero!"
    } else {
        return a / b;
    }
}

module.exports = {
    add, multiply, subtract, divide
};