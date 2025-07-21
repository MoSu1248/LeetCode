/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    newNums = nums.sort((a , b) => a - b); 

    return ((newNums[nums.length - 2] * newNums[newNums.length - 1]) - (newNums[0] * newNums[1]))
};