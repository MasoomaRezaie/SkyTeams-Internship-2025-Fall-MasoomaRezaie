function allFactors(num){
  if(typeof num !== 'number'){
    return 'Error: your input must be a number';
  }
  else{
    let factors = '';   // store al factor of the number in a string
    for(let i=0; i<=num; i++){
      if(num%i === 0){  // check if it is a factor
        factors += i+', '
      }
    }
    return factors.slice(0, -2);  // slice the last ', ' 
  }
}
module.exports = allFactors;