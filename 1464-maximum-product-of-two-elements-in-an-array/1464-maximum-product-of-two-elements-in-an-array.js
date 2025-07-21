/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

  const newNums =  nums.sort((a, b) => a - b); // Sort descending

//       for(let i = 0 ; i < nums.length ; i++){
//         for(let j = i + 1 ; j < nums.length ; j++){
//         let current = 0 ; 
//         current = (nums[i] -1) * (nums[j] - 1); 
//       if( current > highest){
//        highest = current  
//       }
//     }
//   }

let last = newNums.length - 1 ; 
let secondLast = newNums.length - 2; 

    return (newNums[last]-1)*(newNums[secondLast]-1)
};

