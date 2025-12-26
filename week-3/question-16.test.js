const fiboncci = require('./question-16');
test('prints 7 fibonacci numbers', () => {
    expect(fiboncci(7)).toBe('0, 1, 1, 2, 3, 5, 8');
});