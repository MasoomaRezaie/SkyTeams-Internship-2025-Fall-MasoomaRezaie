const isArmstrong = require('./question-15');
test('check if 153 is an armstrong number, return "Armstrong"', () => {
    expect(isArmstrong(153)).toBe('Armstrong');
});

test('check if 123 is not an armstrong number, return "Not Armstrong"', () => {
    expect(isArmstrong(123)).toBe('Not Armstrong');
});