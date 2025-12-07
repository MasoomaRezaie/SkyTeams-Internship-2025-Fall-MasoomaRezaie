const findLargestAndSmallest = require('./question-2');
test('find largest and smallest in 5,10,15 that largest is 15 and smallest is 5', () => {
    expect(findLargestAndSmallest(5, 10, 15)).toBe('Largest = 15 /n Smallest = 5');
});

test('find largest and smallest in 100,57,12 that largest is 100 and smallest is 12', () => {
    expect(findLargestAndSmallest(100, 57, 12)).toBe('Largest = 100 /n Smallest = 12');
});