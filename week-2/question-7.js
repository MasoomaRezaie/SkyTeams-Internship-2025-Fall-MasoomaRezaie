function checkOddEven(number){
  if(typeof number !== 'number'){
    return 'Error: Input must be a number';
  }else{
    if(number % 2 == 0){
      return 'Even';
    }
    else{
      return 'Odd';
    }
  }
}
module.exports = checkOddEven;