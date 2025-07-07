/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {

let count = 0; 
const numArr = num.toString().split("").map(Number);

for(let i  = 0 ; i < numArr.length ; i++){
    if(num % numArr[i] === 0 ){
        count += 1 ; 
    } 
}

    return count
};