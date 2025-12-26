function BMIcalculator(weight, height){
    // check if arguments are numbers or not
  if (typeof height !== 'number' || typeof weight !== 'number') {
    throw new TypeError('Inputs must be numbers');
  }
  // calculate BMI
  const BMI = weight /(height * height);
  if(BMI < 18.5) return `BMI = ${BMI.toFixed(2)} (Underweight)`;
  else if(BMI < 25) return `BMI = ${BMI.toFixed(2)} (Normal weight)`;
  else if(BMI < 30) return `BMI = ${BMI.toFixed(2)} (Overweight)`;
  else return `BMI = ${BMI.toFixed(2)} (Obese)`;
}
module.exports = BMIcalculator;
