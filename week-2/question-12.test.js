const trafficLight = require('./question-12');
test('signal people to Go once the traffic light is green', () => {
    expect(trafficLight('Green')).toBe('Go');
});

test('signal people to stop once the traffic light is red', () => {
    expect(trafficLight('Red')).toBe('Stop');
});