function pyramid(num){
    // check if the argument is a number or not
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    let repeat = 1;
    for(let i=1; i<=num; i++){
        // prints stars in pyramid shap
        console.log(' '.repeat(num - i) + '*'.repeat(repeat));
        repeat += 2;
    }
}
pyramid(5)
module.exports = pyramid;
