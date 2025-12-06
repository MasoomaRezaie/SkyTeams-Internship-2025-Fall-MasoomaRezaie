const checkOddEven = require('./question-7');
test('check 7 and return odd', () => {
    expect(checkOddEven(7)).toBe('Odd');
});

test('check 22 and return even', () => {
    expect(checkOddEven(22)).toBe('Even');
});