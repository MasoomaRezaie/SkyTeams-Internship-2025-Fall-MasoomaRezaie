function uniqueElements(arr) {
    // store uniqe element
    let unique = [];
    for(let i=0; i<arr.length; i++){
        let count = 0;
        for(let j=0; j<arr.length; j++){
            // count the repetaion of a number
            if(arr[i] === arr[j]){
            count ++;
            }
        }
        // if repetaion is 1, it is unique
        if(count === 1) unique.push(arr[i]);
    }
    return unique;
}
module.exports = uniqueElements;