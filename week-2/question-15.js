function validateTriangle(side1, side2, side3) {
  if (typeof side1 !== 'number' || typeof side2 !== 'number' || typeof side3 !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    return 'Invalid triangle';
  }
  if (side1 === side2 && side2 === side3) {
    return 'Valid triangle, equilateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'Valid triangle, isosceles';
  } else {
    return 'Valid triangle, scalene';
  }
}

module.exports = validateTriangle;