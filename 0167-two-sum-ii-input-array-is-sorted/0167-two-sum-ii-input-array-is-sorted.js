/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let i = 0 ; 
    let j = numbers.length - 1; 
    

    while (i < j) {

    let curr = numbers[i] + numbers[j]; 

        if (numbers[i] + numbers[j] === target) {
           return [i + 1 , j + 1]
        }

       if(curr > target){
        j--
       }
       else{
        i++
       }

    }
       return false

    
};