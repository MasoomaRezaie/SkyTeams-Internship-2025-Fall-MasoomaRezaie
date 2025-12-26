function rightAngled(num){
    // the argument should be a number
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    for(let i=1; i<=num; i++){
        console.log('* '.repeat(i));
    }
}
module.exports = rightAngled;