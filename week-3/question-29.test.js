const areEqualArrays = require('./question-29');
test('check [1, 2, 3] and [1, 2, 3] and return Equal', () => {
    expect(areEqualArrays([1, 2, 3], [1, 2, 3])).toBe('Equal');
});

test('check [1, 2, 3, 4, 5] and [1, 2, 3] and return Equal', () => {
    expect(areEqualArrays([1, 2, 3, 4, 5], [1, 2, 3])).toBe('Not Equal');
});