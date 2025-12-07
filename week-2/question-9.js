function gradeCalculator(grade){
  if(typeof grade !== 'number'){
    return 'Error: Grade must be a number';
  }else{
    if(grade < 0 && grade > 100){
      return 'Error: Grade must be greater then 0 and less then 100';
    }else{
      if(grade >= 90){
        return 'A';
      }else if(grade >= 80){
        return 'B';
      } else if(grade >= 70){
        return 'C';
      }else if(grade >= 60){
        return 'D';
      }else if(grade >= 50){
        return 'E';
      } else {
        return 'F'
      }
    }
  }
}

module.exports = gradeCalculator;