/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const arr = []

    
    for (let i = 1; i < nums.length  ; ) {

        x = target - nums[i] ; 

        if (x + nums[i] === target && nums.includes(x) && nums.indexOf(x) !== i) {
            arr.push(i , nums.indexOf(x))
            arr.sort(); 
            return arr
        }
        else {
            i++
        }
    }
    
    
    
};