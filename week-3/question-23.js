function factorial(num) {
    // check if the argument is a positive number
    if (num < 0) {
        return 'Input must be positive number';
    }
    if (num === 1) {
        return 1; // base case
    }
    return num * factorial(num - 1); // recursive call
}
module.exports = factorial;