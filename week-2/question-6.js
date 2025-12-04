function secondConverter(second){
  if(typeof second !== 'number'){
    return 'Error: Input must be a number';
  }else{
    if(second < 0){
      return 'Error: Input must be greater then 0';
    }else{
      let hr = Math.floor(second / (60 * 60));
      let min = Math.floor((second % (60 * 60)) / 60);
      let sec = Math.floor((second % (60 * 60)) % 60);
      return `${hr} hr, ${min} min, ${sec} sec`
    }
  }
}

module.exports = secondConverter;