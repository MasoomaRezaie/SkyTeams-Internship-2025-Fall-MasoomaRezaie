const gradeCalculator = require('./question-9');
test('determine 80 is in grade B', () => {
    expect(gradeCalculator(80)).toBe('B');
});

test('determine 77 is in grade C', () => {
    expect(gradeCalculator(77)).toBe('C');
});