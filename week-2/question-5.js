function interest(p, r, t){
    if(typeof p !== 'number' || typeof r !== 'number' || typeof t !== 'number'){
        return 'Error: Inputs must be numbers';
    }
    else{
        if(p<=0 || r<=0 || t<=0){
            return 'Error: Inputs must be greater then 0';
        }
        else{
            si = (p * r * t) / 100;
            ci = p * ((1 + r / 100) ** t - 1);
            return `SI = ${si.toFixed(1) }, CI = ${ci.toFixed(1)}`;
        }
    }
}

module.exports = interest;