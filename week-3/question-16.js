function fiboncci(n){
  if(typeof n !== 'number'){
    return 'Error: Input must be a number';
  }else{
    // intialize result with 0, 1, as to first numbers
    let result = '0, 1, ';
    // a and b is the first two numbers
    [a, b] = [0, 1];
    for(let i=0; i<n-2; i++){
      result += (a+b)+', ';
      // a and b set to the next two numbers
      [a, b] = [b, a+b];
    }
    // cut out the last ', '
    result = result.slice(0, -2);
    return result;
  }
}

module.exports = fiboncci;