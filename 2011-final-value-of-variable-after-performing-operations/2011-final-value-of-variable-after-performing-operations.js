/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let i = 0; 
    let x = 0; 
    while(operations.length > i ){
        if(operations[i] === "--X" || operations[i]=== "X--"){
            x-- 
            i++
        }

        if(operations[i] === "X++"|| operations[i]=== "++X"){
            x++
            i++ 
        }
    }
    
    return x; 
};