const sum = require('./sum');

test('Addes two numbers', () => {
    expect(sum(2, 3)).toBe(5);
})