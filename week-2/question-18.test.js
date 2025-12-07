const multiplicationTable = require('./question-18');
test('prints 1 to 100 sequentially', () => {
    console.log = jest.fn();
    multiplicationTable(5);
    for(let i=1; i<=10; i++){
        expect(console.log.mock.calls[i-1][0]).toBe(5+' × '+i+' = '+5*i);
    }
});
