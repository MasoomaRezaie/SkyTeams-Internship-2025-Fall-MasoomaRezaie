function hasElement(arr, element){
    // check if it is an array
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    // check if the array is not empty
    if (arr.length === 0) { 
        throw new RangeError('Array must not be empty');
    }
    for (let i = 0; i < arr.length; i++) {
        // check if the array contains the element or not
        return arr.includes(element) ? 'Found' : 'Not Found';
    }
}
module.exports = hasElement;
