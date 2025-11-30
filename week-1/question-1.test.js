const add = require('./question-1');
test('adds 1 + 2 to equal 3', () => {
    expect(add(1,2)).toBe(3);
});

test('must not add "He" + "llo" to equal "Hello"', () => {
    expect(add("He", "llo")).not.toBe("Hello");
});