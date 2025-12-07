function findLargest(arr){
    if(Array.isArray(arr)){
        if(arr.length !== 0){
            let largest = 0;
            for(let i=0; i<arr.length; i++){
                if(typeof arr[i] == 'number'){
                    largest = largest<arr[i] ? arr[i]:largest;
                }else{
                    return 'Error: Your array contains unnumber element'
                }
            }
            return largest;
        }else{
            return 'Error: array must not be empty'
        } 
    }else{
        return 'Error: Input must be array.'
    }
    
}

module.exports = findLargest;