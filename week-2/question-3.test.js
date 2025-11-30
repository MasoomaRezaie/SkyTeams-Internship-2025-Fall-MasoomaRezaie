const getRectangleAreaAndPerimeter = require('./question-3');
test('calculate area and perimeter of rectangle with length of 6 and width of 4 to return: "Area: 24, Perimeter: 20"', () => {
    expect(getRectangleAreaAndPerimeter(6,4)).toBe("Area: 24, Perimeter: 20")
})

test('calculate area and perimeter of rectangle with length of six and width of four to return: "Error: Inputs must be numbers"', () => {
    expect(getRectangleAreaAndPerimeter('six', 'four')).toBe("Error: Inputs must be numbers")
})