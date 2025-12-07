function printNumbers(n){
  if(typeof n !== 'number'){
    return 'Error: Input must be a number';
  }
  else{
    for(let i=1; i<=n; i++){
      console.log(i);
    }
  }
}
module.exports = printNumbers;