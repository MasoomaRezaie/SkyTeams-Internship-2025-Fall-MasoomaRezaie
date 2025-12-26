const rightAngled = require('./question-17');
test('prints four lines of stars in right-angled triangle shape', () => {
    console.log = jest.fn();
    rightAngled(4);
    for(let i=1; i<=4; i++){
        expect(console.log.mock.calls[i-1][0]).toBe('* '.repeat(i));
    }
});