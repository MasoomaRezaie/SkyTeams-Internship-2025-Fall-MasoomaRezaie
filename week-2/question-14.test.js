const charType = require('./question-14');
test('determine a is a vowel', () => {
    expect(charType('a')).toBe('vowel');
});

test('determine 9 is a digit', () => {
    expect(charType(9)).toBe('digit');
});

test('return error for "apple"', () => {
    expect(charType('apple')).toBe('Error: your input must be a char');
});