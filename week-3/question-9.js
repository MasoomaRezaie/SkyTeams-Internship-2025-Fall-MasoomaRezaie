function countElementOccurance(arr, element){
   // check if it is an array
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    // check if the array is not empty
    if (arr.length === 0) { 
        throw new RangeError('Array must not be empty');
    }
    // count the element occurance
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        counter = arr[i] === element ? counter+1 : counter;
    }
    return counter;
}
module.exports = countElementOccurance;
