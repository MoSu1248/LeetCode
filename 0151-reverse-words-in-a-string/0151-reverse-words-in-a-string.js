/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   const arr = s.split(' ');
   const ans = []



 for (let i = arr.length - 1; i >= 0; i--) {

    if(arr[i] === ""){
        continue
    }

    else{
        ans.push(arr[i]); 

    }

}


return ans.join(" ")

} 