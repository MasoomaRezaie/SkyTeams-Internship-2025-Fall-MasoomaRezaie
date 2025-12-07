const printNumbers = require('./question-16');
test('prints 1 to 100 sequentially', () => {
    console.log = jest.fn();
    printNumbers(100);
    for(let i=1; i<=100; i++){
        expect(console.log.mock.calls[i-1][0]).toBe(i)
    }
});
