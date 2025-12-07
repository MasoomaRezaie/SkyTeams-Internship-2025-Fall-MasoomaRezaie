const secondConverter = require('./question-6');
test('convert 3665 seconds into 1 hr, 1 min, and 5 sec', () => {
    expect(secondConverter(3665)).toBe('1 hr, 1 min, 5 sec');
});

test('do not convert -3214 and return an error', () => {
    expect(secondConverter(-3214)).toBe("Error: Input must be greater then 0");
});