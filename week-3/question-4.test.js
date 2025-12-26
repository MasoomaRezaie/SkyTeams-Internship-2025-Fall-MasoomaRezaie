const allFactors = require('./question-4');
test('find all factors of 12 and return 1, 2, 3, 4, 6, 12', () => {
    expect(allFactors(12)).toBe('1, 2, 3, 4, 6, 12');
})