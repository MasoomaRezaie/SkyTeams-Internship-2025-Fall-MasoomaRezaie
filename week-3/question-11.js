function listPrime(num){
    // check if the argument is a number
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    // list all the prime numbers in result as a string
    let result = '';
    for (let i = 2; i < num; i++) {
        let isPrime = true; // set true as initial value of isPrime
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }
        // if isPrime is still true, add i to result
        if(isPrime) result += i +', ';
    }
    return result.slice(0, -2); // cut out the last ', '
}
module.exports = listPrime;