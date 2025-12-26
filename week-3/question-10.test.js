const isPrime = require('./question-10');
test('check, if 17 is a prime number, return "Prime"', () => {
    expect(isPrime(17)).toBe("Prime");
});

test('check, if 20 is a prime number, return "Not Prime"', () => {
    expect(isPrime(20)).toBe("Not Prime");
});