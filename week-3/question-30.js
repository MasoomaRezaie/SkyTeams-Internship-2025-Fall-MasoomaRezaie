function findMissding(arr) {
  let missed;
  for(let i=1; i<arr.length; i++){
    if(arr[i] - arr[i-1] !== 1){
      missed = arr[i]-1;
    }
  }
  return missed
}
module.exports = findMissding;