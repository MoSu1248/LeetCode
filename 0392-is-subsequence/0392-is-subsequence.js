/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let i = j = 0; 
    const newArr = []

    while (i < s.length &&  j < t.length) {

        if(s[i] === t[j]){
            
            newArr.push(t[j])
            i++
            j++ 
        }
        else{
            j++
        }
        
    }

return newArr.join("") === s; 
   
};