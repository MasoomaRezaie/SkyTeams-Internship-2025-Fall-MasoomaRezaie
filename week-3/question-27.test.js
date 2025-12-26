const uniqueElements = require('./question-27');
test('check the elements of [1, 2, 2, 3, 4, 4, 5] and return the unique elements [1, 2, 3, 4, 5]', () => {
        expect(uniqueElements([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 3, 5]);
    }
);