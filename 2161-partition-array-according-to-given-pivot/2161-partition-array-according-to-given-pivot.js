/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {

const less = []; 
const equal = []; 
const more = []; 

for(let i = 0; i < nums.length; i++){
    if(nums[i] < pivot) less.push(nums[i])
    if(nums[i]=== pivot) equal.push(nums[i])
    if(nums[i] > pivot) more.push(nums[i])
}
const result = [...less, ...equal, ...more]
return result
    
};