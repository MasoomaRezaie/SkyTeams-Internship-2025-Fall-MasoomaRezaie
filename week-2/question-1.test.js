const varSwap = require('./question-1');
test('swap a=5 and b=10 to a=10 and b=5', () => {
    expect(varSwap(5, 10)).toBe('a = 10 /n b = 5')
});

test('swap a="Hello" and b="Hi" to a="Hi" and b="Hello"', () => {
    expect(varSwap("Hello", "Hi")).toBe('a = Hi /n b = Hello')
});