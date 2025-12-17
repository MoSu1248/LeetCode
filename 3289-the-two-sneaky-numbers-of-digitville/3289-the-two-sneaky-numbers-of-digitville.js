/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
  const seen = {};
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (seen[num]) {
      ans.push(num);
    } else {
      seen[num] = true;
    }
  }

  return ans;
};