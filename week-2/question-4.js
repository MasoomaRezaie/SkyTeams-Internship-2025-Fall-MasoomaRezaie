function temperatureConverter(type, temp){
    if (!temp){
        return 'Error: Input must not be empty';
    }else{
        if(typeof temp !== 'number'){
            return 'Error: Input must be number';
        }else{
            if(type.toLowerCase() === 'f'){
                return `C = ${(temp - 32) * 5 / 9}`;
            }
            else if(type.toLowerCase() === 'c'){
             return `F = ${(temp * 9 / 5) + 32}`;   
            }
            else{
                return 'Error: Input must be c (celsius) or f (fahrenhit)';
            }
        }
    }
}

module.exports = temperatureConverter;