const sumNumbers = require('./question-17');
test('sum up the numbers from 1 to 5', () => {
    expect(sumNumbers(5)).toBe(15);
})