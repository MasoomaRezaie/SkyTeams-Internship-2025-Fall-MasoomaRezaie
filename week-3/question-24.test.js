const pascalTriangle = require('./question-24');
test('print five lines of pascal traingle', () => {
    jest.spyOn(console, 'log').mockImplementation(()=>{});
    pascalTriangle(5);
    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log.mock.calls[0][0]).toBe('1');
    expect(console.log.mock.calls[1][0]).toBe('1 1');
    expect(console.log.mock.calls[2][0]).toBe('1 2 1');
    expect(console.log.mock.calls[3][0]).toBe('1 3 3 1');
    expect(console.log.mock.calls[4][0]).toBe('1 4 6 4 1');
});