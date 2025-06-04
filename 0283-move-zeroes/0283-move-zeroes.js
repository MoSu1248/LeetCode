/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
  let j=0, temp, i;
    
   
    for(i=0;i<nums.length;i++)
    {
        if(nums[i]!=0 && nums[j]==0)
            {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        if(nums[j]!=0)
            j+=1;
    }
};