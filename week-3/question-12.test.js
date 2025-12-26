const isPalindrome = require('./question-12');
test('check if the 121 is palindrome, return "Palindrome"', () => {
    expect(isPalindrome(121)).toBe('Palindrome');
});

test('check if the 123 is not palindrome, return "Not Palindrome"', () => {
    expect(isPalindrome(123)).toBe('Not Palindrome');
});