const categorizeNumber = require('./question-8');
test('determine -3 is a negetive number', () => {
    expect(categorizeNumber(-3)).toBe('Negative');
});

test('determine 100 is a positive number', () => {
    expect(categorizeNumber(100)).toBe('Positive');
});