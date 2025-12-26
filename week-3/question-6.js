function smallestElement(arr){
    // check if it is an array
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    // check if the array is not empty
    if (arr.length === 0) { 
        throw new RangeError('Array should not be empty');
    }
    // check if the elements of array are numbers
    if (!arr.every(value => typeof value === 'number')) { 
        throw new TypeError('Array must contain only numbers');
    }
    // set the first element as the smallest element
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        // check if the element is smaller then the 'smallest'
        smallest = arr[i] < smallest ? arr[i] : smallest;
    }
    return smallest;
}

module.exports = smallestElement;