function countDigits(num){
  if(typeof num !== 'number'){
    return 'Error: Input must be a number';
  }else{
    let count = 0;
    num = String(num);
    for(let i=0; i<num.length; i++){
      count += 1;
    }
    return count;
  }
}

module.exports = countDigits;