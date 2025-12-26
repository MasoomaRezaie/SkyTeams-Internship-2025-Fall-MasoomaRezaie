function isPalindrome(num){
    // check if the argument is a number
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    num = String(num); 
    // halfLength stores half of the length of the number
    const halfLength = num.length % 2 === 0 ? num.length/2 : (num.length-1)/2;
    isPal = true; // set the initial value of the isPal true
    for(let i=0; i<halfLength; i++){
        //check the digits from both sides
        if(num[i] !== num[num.length-i-1]){
        isPal = false;
        }
    }
    return isPal ? 'Palindrome' : 'Not Palindrome'
}
module.exports = isPalindrome;
