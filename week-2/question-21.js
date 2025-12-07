function sumOfDigits(num){
  if(typeof num !== 'number'){
    return 'Error: Input must be a number';
  }else{
    let sum = 0;
    num = String(num);
    for(let i=0; i<num.length; i++){
      sum += Number(num[i]);
    }
    return sum;
  }
}

module.exports = sumOfDigits;