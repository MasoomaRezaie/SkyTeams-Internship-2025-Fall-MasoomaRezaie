function categorizeNumber(num){
  if(typeof num !== 'number'){
    return 'Error: Input must be a number';
  }else{
    if(num > 0){
      return 'Positive';
    }
    else if(num < 0){
      return 'Negative';
    }
    else{
      return 'Zero';
    }
  }
}
module.exports = categorizeNumber;