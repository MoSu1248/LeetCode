/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {

   let sortNums =  nums.sort((a, b) => a - b)
    let ans = [] ; 

    for(let i = 0 ; i < sortNums.length ; i++){
        if(sortNums[i]  === target){
            ans.push(i)
        }
    }

    return ans
};