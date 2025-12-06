const printEvenNumbers = require('./question-22');
test('prints even numbers from 1 to 10', () => {
    expect(printEvenNumbers(1, 10)).toBe('2, 4, 6, 8, 10');
})