function fiboncci(n){
  if(typeof n !== 'number'){
    return 'Error: Input must be a number';
  }else{
    let result = '0, 1, ';
    [a, b] = [0, 1];
    for(let i=0; i<n-2; i++){
      result += (a+b)+', ';
      [a, b] = [b, a+b];
    }
    result = result.slice(0, -2);
    return result;
  }
}

module.exports = fiboncci;