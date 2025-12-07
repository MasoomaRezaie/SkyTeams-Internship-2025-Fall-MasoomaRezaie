function isLeapYear(year){
  if(typeof year !== 'number'){
    return 'Error: Year must be a number';
  }else if(year < 0){
    return 'Error: Year can not be less then 0';
  }else{
    if(year % 4 !== 0){
      return 'Not leap year';
    }else if(year % 100 !== 0){
      return 'Leap year';
    }else if(year % 400 == 0){
      return 'Leap year';
    }else {
      return 'Not leap year';
    }
  }
}

module.exports = isLeapYear;
