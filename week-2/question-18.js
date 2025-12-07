function multiplicationTable(num, n=10){
  if(typeof num !== 'number' || typeof n !== 'number'){
    return 'Error: Inputs must be numbers';
  }else{
    for(let i=1; i<=n; i++){
      console.log(`${num} × ${i} = ${num*i}`);
    }
  }
}
 module.exports = multiplicationTable;