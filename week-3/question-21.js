function passwordChecker(pass) {
    // check the password length
    if (pass.length < 8) {
        return 'Your password should be at least 8 characters';
    }
    // intialize the hasLower, hasUpper, and hasDigit to false
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    for (let i = 0; i < pass.length; i++) {
        const char = pass[i];
        //if 'i' is a lower case letter, hasLower is true
        if (char >= 'a' && char <= 'z') {
            hasLower = true;
        } 
        //if 'i' is an upper case letter, hasUpper is true
        else if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        } 
        //if 'i' is a digit, hasDigit is true
        else if (char >= '0' && char <= '9') {
            hasDigit = true;
        }
    }
    // if hasLower, hasUpper, and hasDigit are true, the password is strong
    return (hasLower && hasUpper && hasDigit) ? 'Strong' : 'Weak';
}
module.exports = passwordChecker;