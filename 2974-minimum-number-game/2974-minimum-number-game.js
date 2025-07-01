/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
     if (nums.length === 0) return null
    let ans = []; 


    for(let i = nums.length ; i >  0 ; i -= 2){
       
        let lowestNumber2 = Math.min(...nums);
        let val2 = nums.indexOf(lowestNumber2);
        nums.splice(val2, 1); 
        let lowestNumber = Math.min(...nums);
        ans.push(lowestNumber)
        ans.push(lowestNumber2)
        const index = nums.indexOf(lowestNumber);
        nums.splice(index, 1);

       

    }

    return ans;
};