/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {

    nums.sort((a, b) => a -b ); 
    

    const num1 =  nums[nums.length - 1] * nums[nums.length - 2];
    const num2 =  nums[0]* nums[1]

    return num1 - num2
    
};