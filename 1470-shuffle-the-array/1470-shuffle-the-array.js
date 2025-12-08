/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    
    const ans = [];
    let i = 0 ; 
    let j = n  ; 

    while(i < n && j < n *  2){
        ans.push(nums[i])    
        ans.push(nums[j])
    i++
    j++
    }


    return ans
};