/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

let number = n
    
let digits = String(number).split('').map(Number);

let product = 1; 
let sum = 0; 


let ans = []; 


    for(let i = 0; i < digits.length ; i++){
       
        product *= digits[i]

        sum += digits[i];  
        console.log(product)
    }

    return product - sum; 


};