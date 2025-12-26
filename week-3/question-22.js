function collatzSequence(num) {
    // check if the argument is a number
    if(num <= 1){
        return 'Your number should be greater then 1'
    }
    // count steps
    let step = 0;
    // intialize with the number and >> 
    let result = num+' → ';
    while(num>1){
        // If n is even, divide it by 2, otherwise multiply it by 3 and add 1.
        num = num%2===0 ? num/2 : num*3+1;
        step += 1;
        result += num + ' → ';
    }
    return result.slice(0,-2) + `(Steps: ${step})`
}
module.exports = collatzSequence;