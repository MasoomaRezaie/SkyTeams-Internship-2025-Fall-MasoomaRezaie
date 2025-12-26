const pyramid = require('./question-19');
test('prints five lines of stars in pyramid shape', () => {
    console.log = jest.fn();
    pyramid(5);
    let repeat = 1;
    for(let i=1; i<=4; i++){
        expect(console.log.mock.calls[i-1][0]).toBe(' '.repeat(5 - i) + '*'.repeat(repeat));
        repeat += 2;
    }
});