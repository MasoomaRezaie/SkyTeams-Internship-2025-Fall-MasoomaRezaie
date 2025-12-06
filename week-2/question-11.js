function calculator(num1, num2, operator){
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'Error: Inputs must be numbers';
  }else{
    switch (operator){
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0){
          return 'Error: Division by zero';}
        return num1 / num2;
      default:
        return 'Error: Invalid operator';
    }
  }
}

module.exports = calculator;
