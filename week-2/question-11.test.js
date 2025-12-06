const calculator = require('./question-11');
test('calculate 5 + 3 to 8', () => {
    expect(calculator(5, 3, '+')).toBe(8);
});

test('do not claculate 6 / 0 and return an error', () => {
    expect(calculator(6, 0, '/')).toBe('Error: Division by zero');
});