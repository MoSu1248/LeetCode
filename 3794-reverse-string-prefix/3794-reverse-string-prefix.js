/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {

    if (k === 1) return s; 
    let i = 0; 
    let last = k - 1  
    const arr = s.split("");

    while(i < last){
        let temp = arr[i]; 
        arr[i] = arr[last];
        arr[last] = temp
        i++; 
        last--; 
    }

    return arr.join('')
    
};