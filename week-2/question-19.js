function reverseNumber(num){
  if(typeof num !== 'number'){
    return 'Error: Input must be a number';
  }else{
    let result = '';
    num = String(num);
    for(let i=num.length-1; i>=0; i--){
      result += num[i];
    }
    result = Number(result);
    return result;
  }
}

module.exports = reverseNumber;