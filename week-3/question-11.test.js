const listPrime = require('./question-11');
test('find all prime numbers up to 10 and return 2, 3, 5, 7', () => {
    expect(listPrime(10)).toBe('2, 3, 5, 7');
});