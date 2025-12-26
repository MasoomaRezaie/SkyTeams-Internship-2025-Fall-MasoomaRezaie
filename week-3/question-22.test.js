const collatzSequence = require('./question-22');
test('print collatz sequence from 6 to 1 and the number of steps', () => {
    expect(collatzSequence(6)).toBe('6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8)');
});