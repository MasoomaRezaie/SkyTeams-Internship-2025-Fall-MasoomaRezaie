function printEvenNumbers(start, end){
  if(typeof start !== 'number' && typeof end !== 'number'){
    return 'Error: Inputs must be numbers';
  }else{
    let result = '';
    for(let i=start; i<=end; i++){
      if(i % 2 === 0) result += i+', ';
    }
    result = result.slice(0, -2);
    return result;
  }
}

module.exports = printEvenNumbers;