/**
 * @param {number[]} nums
 * @return {boolean}
 */
   

const nums = [2,14,18,22,22] ;

function containsDuplicate(params) {

    params.sort();
    
    if (params.length <= 1) return false;

    for (let i = 0; i < params.length - 1; i++) {
     if (params[i] === params[i + 1]) {
            return true;
        }
    
    }

    return false;

}
