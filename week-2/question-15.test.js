const validateTriangle = require('./question-15');
test('validate 3,4,5 as edges of a valid scalene triangle', () => {
    expect(validateTriangle(3, 4, 5)).toBe('Valid triangle, scalene');
});

test('return error for triangle with three, four, five edges', () => {
    expect(validateTriangle('three', 'four', 'five')).toBe('Error: Inputs must be numbers');
});