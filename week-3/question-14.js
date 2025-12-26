function factorialOf(num){
    // check if argument is a number or not
    if (typeof num !== 'number') {
    throw new TypeError('Input must be a number');
    }
    let result=1;
    for(let i=1; i<=num; i++){
        result *= i;
    }
    return result;
}
module.exports = factorialOf;