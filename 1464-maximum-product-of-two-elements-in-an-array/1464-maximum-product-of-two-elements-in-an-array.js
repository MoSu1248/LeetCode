/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

let highest = 0 ; 

      for(let i = 0 ; i < nums.length ; i++){
    for(let j = i + 1 ; j < nums.length ; j++){
        let current = 0 ; 

        current = (nums[i] -1) * (nums[j] - 1); 

        console.log(current)
      if( current > highest){
       highest = current  
      }
    }
  }
  return highest 
};

