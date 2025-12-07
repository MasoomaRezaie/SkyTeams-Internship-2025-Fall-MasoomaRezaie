const months = require('./question-13');
test('give information for month 2 that "February, 28 or 29 days"', () => {
    expect(months(2)).toBe('February, 28 or 29 days');
});

test('give information for month 9 that "September, 30 days"', () => {
    expect(months(9)).toBe('September, 30 days');
});