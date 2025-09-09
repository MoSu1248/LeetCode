/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   
    let ans =  s.split(" ");
    const finalAns =  [] ;

    for(let i = 0  ; i < ans.length ; i++){
        for(let j = ans[i].length -1 ; 0 <= j ; j--){
            
       finalAns.push(ans[i][j])
     }
     if(i < ans.length-1){
        finalAns.push(' '); 

    }
    }

return finalAns.join('')
};