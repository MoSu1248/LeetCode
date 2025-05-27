/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    
    let sortSet = new Set();
    ansArry = [] ;
    
    
    if (nums.length < 2) {
        return []
    }


for (let i = 0; i < nums.length; i++) {
    
    if (sortSet.has(nums[i])) {
        ansArry.push(nums[i])
    }
    else{
        sortSet.add(nums[i])
    }

}

return ansArry

};