function areEqualArrays(arr1, arr2) {
    let equal = true;
    if(arr1.length !== arr2.length){
        equal = false
    }
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]);
    }
    return equal === true ? 'Equal' : 'Not Equal';
}
module.exports = areEqualArrays;