function rightAlign(num){
    // check if the argument is a number or not
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    for(let i=1; i<=num; i++){
        console.log(' '.repeat(num-i) + '*'.repeat(i));
    }
}
module.exports = rightAlign;