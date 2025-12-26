const hasElement = require('./question-8');
test('check if [3, 6, 9, 12] contains 6 return "Found"', () => {
    expect(hasElement([3, 6, 9, 12], 6)).toBe('Found');
});

test('check if [3, 6, 9, 12] does not contain 1 return "Not Found"', () => {
    expect(hasElement([3, 6, 9, 12], 1)).toBe('Not Found');
});

test('check if ["a", "s", "d", "f"] contains "a" return "Found"', () => {
    expect(hasElement(["a", "s", "d", "f"], "a")).toBe('Found');
});