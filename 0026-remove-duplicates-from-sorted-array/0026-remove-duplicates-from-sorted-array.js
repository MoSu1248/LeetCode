/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // pointer for the next unique position

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // move unique element to the k-th position
            k++;
        }
    }

    return k;
};

    



   
    