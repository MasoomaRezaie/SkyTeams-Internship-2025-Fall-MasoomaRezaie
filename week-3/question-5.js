function largestElement(arr){
    // check if it is an array
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    // check if the array is not empty
    if (arr.length === 0) { 
        throw new RangeError('Array must not be empty');
    }
    // check if the elements of array are numbers
    if (!arr.every(value => typeof value === 'number')) { 
        throw new TypeError('Array must contain only numbers');
    }
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        // check if the element is larger then 'largest'
        largest = arr[i] > largest ? arr[i] : largest;
    }
    return largest;
}
module.exports = largestElement;