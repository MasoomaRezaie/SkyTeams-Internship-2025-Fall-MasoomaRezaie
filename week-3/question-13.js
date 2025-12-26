function powerOf(num, power){
    // check if arguments are numbers or not
    if (typeof num !== 'number' || typeof power !== 'number') {
        throw new TypeError('Inputs must be numbers');
    }
    let result=1;
    for(let i=0; i<power; i++){
        result *= num;
    }
    return result;
}

module.exports = powerOf;