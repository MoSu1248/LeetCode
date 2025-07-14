/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const prevNums = {}; // number -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in prevNums) {
            return [prevNums[complement], i];
        }
        prevNums[nums[i]] = i;
    }
};
