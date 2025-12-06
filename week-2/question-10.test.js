const isLeapYear = require('./question-10');
test('determine 2000 is a leap year', () => {
    expect(isLeapYear(2000)).toBe('Leap year');
});

test('determine 1900 is not a leap year', () => {
    expect(isLeapYear(1900)).toBe('Not leap year');
});