/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {

    const count = {} ;
    let highestValue = 0; 
    let ans = [];
     
     for(let char of s){

        if(!(char in count)){

            count[char] = 0

        }

            count[char] += 1
     }

     for(let char in count){

     const value = count[char];

    if(value > highestValue){

      highestValue = value 
      currentChar = char

    }
 
  }

 for (let i = highestValue; i >= 1; i--) {
  for (let char in count) {
    if (count[char] === i) {
        ans.push(char.repeat(i));
    }
  }
}
  

  return ans.join("")
  };