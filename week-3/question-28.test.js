const nonRepeatElements = require('./question-28');
test('check the elements of [3, 1, 3, 5, 1] and return the unique elements [3, 1, 5]', () => {
    expect(nonRepeatElements([3, 1, 3, 5, 1])).toEqual([3, 1, 5]);
});