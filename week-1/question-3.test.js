const findLargest = require('./question-3');
test('finds largest number in [12,20,15,17,11] that is 20', () => {
    expect(findLargest([12,20,15,17,11])).toBe(20);
});

test('does not find largest number in "wer234fr" and return an error', () => {
    expect(findLargest([12,20,15,17,11])).toBe(20);
});