function nonRepeatElements(arr) {
    // store nonrepeated elements
    let unique = [];
    for(let i=0; i<arr.length; i++){
        if(!unique.includes(arr[i])) unique.push(arr[i]);
    }
    return unique;
}
module.exports = nonRepeatElements;
