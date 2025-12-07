function findGCD(num1, num2){
  if(typeof num1 !== 'number' && typeof num2 !== 'number'){
    return 'Error: Inputs must be numbers';
  }else{
    let gcd = 0;
    for(let i=0; i<=num1; i++){
      if(num1 % i === 0 && num2 % i === 0) gcd = i;
    }
    return gcd;
  }
}
function findLCM(num1, num2){
  if(typeof num1 !== 'number' && typeof num2 !== 'number'){
    return 'Error: Inputs must be numbers';
  }else{
    return (num1 * num2)/findGCD(num1, num2);
  }
}

module.exports = findLCM;