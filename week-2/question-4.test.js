const temperatureConverter = require('./question-4');
test('convert 25 Celsius to 77 Fahrenheit', () => {
    expect(temperatureConverter('c', 25)).toBe('F = 77');
});

test('convert 77 Fahrenheit to 25 Celsius', () => {
    expect(temperatureConverter('F', 77)).toBe('C = 25');
});

test('can not convert ten Celsius and return "Error: Input must be number"', () => {
    expect(temperatureConverter('c', 'ten')).toBe('Error: Input must be number');
});