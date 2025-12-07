function sumNumbers(n){
  if(typeof n !== 'number'){
    return 'Error: Input must be a number'
  }else{
    let sum = 0;
    for(let i=0; i<=n; i++){
      sum += i;
    }
    return sum;
  }
}

module.exports = sumNumbers;