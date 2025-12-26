function countVowels(str){
  if(!str){
    return 'Error: your input should be a valid string'
  }else{
    let counter = 0;   // count vowels
    for(let i=0; i<str.length; i++){
      if('aeiou'.includes(str[i].toLowerCase())){  //check if this character is vowel
        counter += 1;
      }
    }
    return counter;
  }
}
module.exports = countVowels;