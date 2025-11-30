function reverse(str){
    if(typeof str == 'string'){
        let reversed_str = '';
        for(let i=str.length-1; i>=0; i--){
            reversed_str += str[i];
        }
        return reversed_str;
    }
    else{
        return 'Error: Input must be a string';
    }
}

module.exports = reverse;