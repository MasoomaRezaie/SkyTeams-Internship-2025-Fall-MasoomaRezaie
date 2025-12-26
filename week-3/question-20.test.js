const BMIcalculator = require('./question-20');
test('calculate BMI when weigth is 70 and hight is 1.75 and return "BMI = 22.86 (Normal weight)"', () => {
    expect(BMIcalculator(70, 1.75)).toBe("BMI = 22.86 (Normal weight)");
});