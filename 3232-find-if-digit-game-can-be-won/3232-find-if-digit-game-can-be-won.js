/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singles = 0 ; 
    let doubles = 0  ; 

    for(let i  = 0 ; i < nums.length ; i++){
        if(nums[i] <= 9){
            singles += nums[i]; 
        }
        else {
        doubles += nums[i]

        }
    }


    if(singles > doubles || doubles > singles) {
        return true; 
    }

    return false
    
};