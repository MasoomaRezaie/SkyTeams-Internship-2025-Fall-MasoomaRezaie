function isArmstrong(num){
    // check if the argument is a number or not
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    num = String(num);
    // the check stores the sum of the digits raised to the number of digits
    let check = 0;
    for(let i=0; i<num.length; i++){
        // raise each digit to the power of the number of digits
        // and add it to check
        check += num[i]**num.length;
    }
    return check === Number(num) ? 'Armstrong' : 'Not Armstrong'
}
module.exports = isArmstrong;