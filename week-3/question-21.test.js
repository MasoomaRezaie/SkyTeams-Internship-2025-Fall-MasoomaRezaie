const passwordChecker = require('./question-21');
test('check "MyPass123" if it is strong password return "Strong"', () => {
    expect(passwordChecker("MyPass123")).toBe("Strong");
});

test('check "mypass123" if it is strong password return "Weak"', () => {
    expect(passwordChecker("mypass123")).toBe("Weak");
});