const findMissding = require('./question-30');
test('find the missing element in [1, 2, 4, 5] and return 3', () => {
    expect(findMissding([1, 2, 4, 5])).toBe(3);
});