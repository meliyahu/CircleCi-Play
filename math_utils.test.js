const {add, multiply, subtract, divide} = require('./math_utils');


test('Add two numbers', () => {
    expect(add(2, 3)).toBe(5);
})

test('Multiply two numbers', () => {
     const result = multiply(3, 4);
     expect(result).toBe(12);
});

test('Subtract number a from number b', () => {
    expect(subtract(4, 5)).toBe(-1);
});

test('Divide number by zero', () => {
    expect(divide(2, 0)).toBe('Cannot divide by zero!');
})

test('Divide with a number not zero', () => {
    const result = divide(4,2);
    expect(result).toBe(2);
})