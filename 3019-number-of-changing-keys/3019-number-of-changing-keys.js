/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {

    let count = 0 ; 
    let key = s.toLowerCase(); 

    

    for(let i = 1; i < key.length - 1 ; i++){
        if(key[i] !== key[i+1]){
            count += 1
        }
    }

console.log(count)

    return count 
};