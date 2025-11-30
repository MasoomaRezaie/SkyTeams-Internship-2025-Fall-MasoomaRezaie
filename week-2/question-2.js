function findLargestAndSmallest(num1, num2, num3){
    if(typeof num1 == 'number' && typeof num2 == 'number' && typeof num3 == 'number'){
        const numbers = [num1, num2, num3];
        var largest = 0;
        var smallest = num1;
        for(let i=numbers.length; i>=0; i--){
            largest = numbers[i]>largest? numbers[i]:largest;
            smallest = numbers[i]<smallest? numbers[i]:smallest;
        }
        return `Largest = ${largest} /n Smallest = ${smallest}`;
    }
    else{
        return 'Error: Inputs must be numbers';
    }
}
module.exports = findLargestAndSmallest;