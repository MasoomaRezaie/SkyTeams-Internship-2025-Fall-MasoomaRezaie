const interest = require('./question-5');
test('calculate SI and CI for P=1000, R=5, T=2 and return "SI = 100, CI = 102.5"', () => {
    expect(interest(1000, 5, 2)).toBe("SI = 100.0, CI = 102.5");
});

test('calculate SI and CI for P=1000, R=-5, T=2 and return "Error: Inputs must be greater then 0"', () => {
    expect(interest(1000, -5, 2)).toBe("Error: Inputs must be greater then 0");
});