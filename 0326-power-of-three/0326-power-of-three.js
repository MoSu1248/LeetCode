/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
     
        let a = 3;
       
          // computing power
        let p = Math.log10(n)/ Math.log10(a); 
       
        // checking to see if power is an integer or not
        if(p - Math.floor(p) == 0) {
           return true 
        }
        else
           return false 
};