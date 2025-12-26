function isPrime(num){
    // check if the argument is a number
    if (typeof num !== 'number') {
        throw new TypeError('Inputust be a number');
    }
    for (let i = 2; i < num; i++) {
        // if the number is dividable by i, it is not prime
        if(num % i === 0){
        return 'Not Prime'
        }
    }
    return 'Prime';
}
console.log(isPrime(50))
module.exports = isPrime;