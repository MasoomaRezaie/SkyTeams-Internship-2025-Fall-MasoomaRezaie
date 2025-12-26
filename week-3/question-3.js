function sumOfDigits(num){
  if(typeof num !== 'number'){
    return 'Error: Input must be a number';
  }else{
    let sum = 0;
    num = String(num);  //invert number to string to access each digit
    for(let i=0; i<num.length; i++){
      sum += Number(num[i]); 
    }
    return sum;
  }
}

module.exports = sumOfDigits;