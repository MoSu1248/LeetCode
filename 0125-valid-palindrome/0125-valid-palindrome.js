/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    console.log(cleanString.length);
    
    const palArray = [];
    const rArray = [] ; 

   for (let i = 0 ; i < cleanString.length ; i++ ){

    palArray.push(cleanString[i]);

   }

   for (let i = 0 ; i < cleanString.length ; i++ ){
    rArray.push(palArray.pop());

  }
  let string = rArray.join("");

  if (string === cleanString) {
   
    return true
    
  }

  else {
    
return false
  }

};