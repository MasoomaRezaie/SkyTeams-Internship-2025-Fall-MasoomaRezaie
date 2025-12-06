function charType(char){
  if(char.length > 1){
    return 'Error: your input must be a char';
  }else{
    if(typeof char === 'number') return 'digit';
    else if(typeof char === 'string'){
      if('aeiou'.includes(char)) return 'vowel';
      else return 'consonant';
    }
    else{
      return 'special symbol';
    }
  }
}
module.exports = charType;