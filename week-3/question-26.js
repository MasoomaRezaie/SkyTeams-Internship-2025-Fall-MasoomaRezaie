function binary(num) {
  let binary = '';
  while(num >= 1){
    //add the result of the num%2 to binary
    binary += num % 2;
    num = Math.floor(num / 2);
  }
  let result='';
  // reverse the binary number to get the final result
  for(let i=binary.length-1; i>=0; i--){
    result += binary[i];
  }
  return result;
}
module.exports = binary;
