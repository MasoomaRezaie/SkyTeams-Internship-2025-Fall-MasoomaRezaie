const rightAlign = require('./question-18');
test('prints four lines of stars in right align triangle shape', () => {
    console.log = jest.fn();
    rightAlign(4);
    for(let i=1; i<=4; i++){
        expect(console.log.mock.calls[i-1][0]).toBe(' '.repeat(4-i) + '*'.repeat(i));
    }
});