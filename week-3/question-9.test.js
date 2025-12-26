const countElementOccurance = require('./question-9');
test('count the occurance of 2 in [2, 3, 2, 5, 2] and return 3', () => {
    expect(countElementOccurance([2, 3, 2, 5, 2], 2)).toBe(3);
});